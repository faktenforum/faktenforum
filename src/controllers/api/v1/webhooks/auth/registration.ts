import { Controller, Inject } from "@tsed/di";
import { BodyParams, Context } from "@tsed/platform-params";
import { Post, Returns, Tags, Description } from "@tsed/schema";
import { createAvatar } from "@dicebear/core";
import { glass } from "@dicebear/collection";

import { ApiKeyAccessControlDecorator } from "~/decorators";
import { RegistrationPreResponse, RegistrationRequest } from "~/models";
import { AuthService, FileService, HasuraService, MatrixService } from "~/services";
import { UserRole } from "~/models";
import { generateKratosResponse } from "~/utils";
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

const DEFAULT_LANGUAGE = "de";

@Controller("/webhooks/auth/registration")
export class AuthRegistrationWebHookController {
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

  @Post("/finalise")
  @Tags("Auth")
  @Description(
    "Webhook used by Kratos to finalise a user's account after registration, This in cludes the creation of the user in the database and the creation of the user in the matrix chat"
  )
  @ApiKeyAccessControlDecorator({ service: "kratos" })
  @(Returns(200, String).ContentType("application/json")) // prettier-ignore
  async postfinaliseAcount(@BodyParams() body: RegistrationRequest, @Context() ctx: Context) {
    let id = null;
    let chatUsername = null;
    try {
      //Generate Avatar
      const avatar = createAvatar(glass, { seed: body.traits.username });
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
          profileImage: body.id,
          role: UserRole.Aspirant
        }
      );
      id = response.insertUserOne?.id;
      await this.matrixService.createUser(body.traits.username);
      chatUsername = body.traits.username;
      return {
        messages: []
      };
    } catch (error) {
      this.logger.error(error);
      this.fileService.deleteFile(body.id);
      this.authService.deleteUser(body.id);
      if (id) {
        await this.hasuraService.adminRequest<DeleteUserByPkMutation, DeleteUserByPkMutationVariables>(
          DeleteUserByPkDocument,
          { id }
        );
      }
      if (chatUsername) {
        await this.matrixService.deleteUser(chatUsername, body.id);
      }

      ctx.response
        .status(500)
        .body(generateKratosResponse("#/server/error", 500, "Internal server error: " + error));
    }
  }

  @Post("/validate")
  @Tags("Auth")
  @Description("Webhook used by Kratos to check if a username is already taken by an deleted user")
  @ApiKeyAccessControlDecorator({ service: "kratos" })
  @Returns(200, RegistrationPreResponse)
  async preRegistration(@BodyParams() body: RegistrationRequest, @Context() ctx: Context) {
    try {
      const result = await this.hasuraService.adminRequest<
        GetUserByUsernameQuery,
        GetUserByUsernameQueryVariables
      >(GetUserByUsernameDocument, { username: body.traits.username });

      if (result.user.length > 0) {
        const response = generateKratosResponse(
          "#/traits/username",
          4000007,
          "An account with the same identifier (email, phone, username, ...) exists already.",
          { field: "username", value: body.traits.username }
        );

        ctx.response.status(400).body(response);
        return;
      }

      return { identity: { metadata_public: { role: UserRole.Aspirant, lang: DEFAULT_LANGUAGE } } };
    } catch (error) {
      this.logger.error("Pre-registration error", error);
      ctx.response
        .status(500)
        .body(generateKratosResponse("#/server/error", 500, "Internal server error: " + error));
    }
  }
}
