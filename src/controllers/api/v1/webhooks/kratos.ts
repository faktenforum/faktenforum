import { Controller, Inject } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { Post, Returns } from "@tsed/schema";
import { createAvatar } from "@dicebear/core";
import { glass } from "@dicebear/collection";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { RegistrationPreResponse, RegistrationRequest } from "~/models";
import { AuthService, FileService, HasuraService, MatrixService } from "~/services";
import { UserRole } from "~/models";

import {
  InsertUserDocument,
  DeleteUserByPkDocument,
  InsertFileDocument,
  GetUserByUsernameDocument
} from "~/generated/graphql";
import type {
  InsertFileMutation,
  InsertFileMutationVariables,
  InsertUserMutation,
  InsertUserMutationVariables,
  DeleteUserByPkMutation,
  DeleteUserByPkMutationVariables,
  GetUserByUsernameQuery,
  GetUserByUsernameQueryVariables
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

  @Post("/finalize-registration")
  @ApiKeyAccessControlDecorator({ service: "kratos" })
  @(Returns(200, String).ContentType("application/json")) // prettier-ignore
  async postFinalizeAcount(@BodyParams() body: RegistrationRequest) {
    let id = null;
    let chatUsername = null;
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
      return;
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

  @Post("/pre-registration")
  @ApiKeyAccessControlDecorator({ service: "kratos" })
  @Returns(200, RegistrationPreResponse)
  async preRegistration(@BodyParams() body: RegistrationRequest) {
    // check if username is already taken by an deleted user
    console.log("preRegistration", body);
    const result = await this.hasuraService.adminRequest<
      GetUserByUsernameQuery,
      GetUserByUsernameQueryVariables
    >(GetUserByUsernameDocument, {
      username: body.traits.username
    });
    console.log("result", result);

    if (result.user.length > 0) {
      const error = new BadRequest("Username already taken");
      error.body = {
        messages: [
          {
            instance_ptr: "#/traits/username",
            messages: [
              {
                id: 4000007, // Unique error code for username taken
                text: "Username already taken",
                type: "error",
                context: {
                  field: "username",
                  value: body.traits.username
                }
              }
            ]
          }
        ]
      };
      throw error;
    }

    console.log("no error");
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
