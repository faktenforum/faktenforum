import { Controller, Inject } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { Post, Returns } from "@tsed/schema";
import { createAvatar } from "@dicebear/core";
import { glass } from "@dicebear/collection";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { RegistrationPreResponse, RegistrationRequest } from "~/models";
import { AuthService, FileService, HasuraService, MatrixService } from "~/services";
import { UserRole } from "~/models";

import { InsertUserDocument, DeleteUserByPkDocument, InsertFileDocument } from "~/generated/graphql";
import type {
  InsertFileMutation,
  InsertFileMutationVariables,
  InsertUserMutation,
  InsertUserMutationVariables,
  DeleteUserByPkMutation,
  DeleteUserByPkMutationVariables
} from "~/generated/graphql";

import { Logger } from "@tsed/common";
import { BadRequest } from "@tsed/exceptions";

const DEFAULT_LANGUAGE = "de";

@Controller("/webhooks")
export class KratosWebHookController {
  @Inject(HasuraService)
  hasuraService: HasuraService;

  @Inject(AuthService)
  authService: AuthService;

  @Inject(MatrixService)
  matrixService: MatrixService;

  @Inject(FileService)
  fileService: FileService;

  @Inject(Logger)
  logger: Logger;

  @Post("/registration-creation")
  @ApiKeyAccessControlDecorator({ service: "kratos" })
  @(Returns(200, String).ContentType("application/json")) // prettier-ignore
  async postFinalizeAcount(@BodyParams() body: RegistrationRequest) {
    let id = null;
    let chatUsername = null;
    // check if username is already taken by an deleted user
    // throw for testing username already taken
    // throw new BadRequest("Username already taken");
    try {
      //Generate Avatar
      const avatar = createAvatar(glass, {
        seed: body.traits.username
      });
      const result = await this.fileService.saveFile(body.id, avatar.toString(), undefined, {
        name: `avatar-${body.traits.username}.svg`,
        "Content-Type": "image/svg+xml"
      });
      await this.hasuraService.adminRequest<InsertFileMutation, InsertFileMutationVariables>(
        InsertFileDocument,
        {
          id: body.id,
          mimeType: "image/svg+xml",
          eTag: result.etag,
          name: `avatar-${body.traits.username}.svg`,
          size: avatar.toString().length * 8
        }
      );
      const response = await this.hasuraService.adminRequest<InsertUserMutation, InsertUserMutationVariables>(
        InsertUserDocument,
        {
          id: body.id,
          email: body.traits.email,
          username: body.traits.username,
          firstName: body.transientPayload.firstName ?? "",
          lastName: body.transientPayload.lastName ?? "",
          profileImage: body.id
        }
      );
      id = response.insertUserOne?.id;
      await this.matrixService.createUser(body.traits.username);
      chatUsername = body.traits.username;
      return body;
    } catch (error) {
      this.logger.error(error);
      this.fileService.deleteFile(body.id);
      this.authService.deleteUser(body.id);
      if (id) {
        await this.hasuraService.adminRequest<DeleteUserByPkMutation, DeleteUserByPkMutationVariables>(
          DeleteUserByPkDocument,
          {
            id
          }
        );
      }
      if (chatUsername) {
        await this.matrixService.deleteUser(chatUsername, body.id);
      }
      throw new Error(error);
    }
   
  }

  @Post("/registration-metadata")
  @ApiKeyAccessControlDecorator({ service: "kratos" })
  @Returns(200, RegistrationPreResponse)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async preFinalizeAccount(@BodyParams() body: RegistrationRequest) {
    return {
      identity: {
        metadata_public: {
          role: UserRole.Aspirant,
          lang: DEFAULT_LANGUAGE // TODO take from language selector on the page, once it exists
        }
      }
    };
  }
}
