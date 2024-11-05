import { Controller, Inject } from "@tsed/di";
import { Post, Returns } from "@tsed/schema";
import { createAvatar } from "@dicebear/core";
import { glass } from "@dicebear/collection";
import { ApiKeyAccessControlDecorator } from "~/decorators";

import { FileService, HasuraService } from "~/services";

import { InsertFileDocument, GetAllUsersProfileImagesDocument } from "~/generated/graphql";
import type {
  InsertFileMutation,
  InsertFileMutationVariables,
  GetAllUsersProfileImagesQuery,
  GetAllUsersProfileImagesQueryVariables
} from "~/generated/graphql";

import { Logger } from "@tsed/common";

@Controller("/patch")
export class PatchController {
  @Inject(HasuraService)
  hasuraService: HasuraService;

  @Inject(FileService)
  fileService: FileService;

  @Inject(Logger)
  logger: Logger;

  @Post("/fix-user-default-profile-image")
  @ApiKeyAccessControlDecorator({ service: "kratos" })
  @(Returns(200, String).ContentType("application/json")) // prettier-ignore
  async fixDefaultProfileImage() {
    const users = await this.hasuraService.adminRequest<
      GetAllUsersProfileImagesQuery,
      GetAllUsersProfileImagesQueryVariables
    >(GetAllUsersProfileImagesDocument, {});
    for (const user of users.user) {
      //check if file exists
      this.logger.debug(`Checking if user ${user.id} has a default profile image`);

      const fileExists = await this.fileService.fileExists(user.id);
      if (fileExists) {
        this.logger.info(`User ${user.id} has a default profile image (File ID: )`);
        continue;
      }
      //Generate Avatar
      const avatar = createAvatar(glass, {
        seed: user.username
      });
      const result = await this.fileService.saveFile(user.id, avatar.toString(), undefined, {
        name: `avatar-${user.username}.svg`,
        "Content-Type": "image/svg+xml"
      });
      await this.hasuraService.adminRequest<InsertFileMutation, InsertFileMutationVariables>(
        InsertFileDocument,
        {
          id: user.id,
          mimeType: "image/svg+xml",
          eTag: result.etag,
          name: `avatar-${user.username}.svg`,
          size: avatar.toString().length * 8
        }
      );
      this.logger.info(`Added Profile Default image for User ${user.id} `);
    }
    return {};
  }
}
