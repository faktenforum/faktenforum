import { Controller, Inject } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { Post, Returns } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { RegistrationPreResponse, RegistrationRequest } from "~/models";
import { AuthService, HasuraService, MatrixService } from "~/services";
import { UserRole } from "~/models";

import { InsertUserDocument, DeleteUserByPkDocument } from "~/generated/graphql";
import type {
  InsertUserMutation,
  InsertUserMutationVariables,
  DeleteUserByPkMutation,
  DeleteUserByPkMutationVariables
} from "~/generated/graphql";

import { Logger } from "@tsed/common";

const DEFAULT_LANGUAGE = "de";

@Controller("/webhooks")
export class KratosWebHookController {
  @Inject(HasuraService)
  hasuraService: HasuraService;

  @Inject(AuthService)
  authService: AuthService;

  @Inject(MatrixService)
  matrixService: MatrixService;

  @Inject(Logger)
  logger: Logger;

  @Post("/registration-creation")
  @ApiKeyAccessControlDecorator({ service: "kratos" })
  @(Returns(200, String).ContentType("application/json")) // prettier-ignore
  async postFinalizeAcount(@BodyParams() body: RegistrationRequest) {
    let id = null;
    let chatUsername = null;
    try {
      const response = await this.hasuraService.adminRequest<InsertUserMutation, InsertUserMutationVariables>(
        InsertUserDocument,
        {
          id: body.id,
          email: body.traits.email,
          username: body.traits.username,
          firstName: body.transientPayload.firstName ?? "",
          lastName: body.transientPayload.lastName ?? ""
        }
      );
      id = response.insertUserOne?.id;
      await this.matrixService.createUser(body.traits.username, body.traits.email);
      chatUsername = body.traits.username;
      return {};
    } catch (error) {
      this.logger.error(error);
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
        await this.matrixService.deleteUser(chatUsername);
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
