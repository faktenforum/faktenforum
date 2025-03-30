import { Controller, Inject } from "@tsed/di";
import { Logger } from "@tsed/common";
import { BodyParams } from "@tsed/platform-params";
import { Post, Returns, Tags } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import {
  UpdateUserRoleRequest,
  KratosUserSchema,
  DeleteUserRequest,
  GetUserRoleRequest,
  RequestSucessInfo,
  BlockAccountRequest
} from "~/models";

import { AuthService, HasuraService, MatrixService } from "~/services";
import { Identity } from "@ory/kratos-client";
import { AnonymizeUserProfileDocument } from "~/generated/graphql";
import { BadRequest, InternalServerError, Exception } from "@tsed/exceptions";

const DEFAULT_LANGUAGE = "de";

@Controller("/webhooks/auth/account")
export class AuthAccountWebHookController {
  @Inject(HasuraService)
  hasuraService: HasuraService;

  @Inject(AuthService)
  authService: AuthService;

  @Inject(MatrixService)
  matrixService: MatrixService;

  @Inject(Logger)
  logger: Logger;

  @Post("/get-details")
  @Tags("Auth")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, [KratosUserSchema]).ContentType("application/json")) // prettier-ignore
  async getUsersWithAccountDetails(@BodyParams() body: GetUserRoleRequest) {
    const result = await this.authService.getAllUsers(undefined, undefined, body.ids);
    return result.identities.map((user) => ({
      id: user.id,
      role: user.metadata_public.role,
      verified: !!user.verifiable_addresses?.[0]?.verified
    }));
  }

  @Post("/update-role")
  @Tags("Auth")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, KratosUserSchema).ContentType("application/json")) // prettier-ignore
  async updateUserRole(@BodyParams() body: UpdateUserRoleRequest) {
    this.matrixService.alterSpaceMembershipsByRole(body.userId, body.role);
    const kratosUser = await this.authService.updateUserRole(body.userId, body.role);
    return this.transformKratosUser(kratosUser as Identity);
  }

  @Post("/delete")
  @Tags("Auth")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, RequestSucessInfo).Description("Successfully deleted the user").ContentType("application/json")) // prettier-ignore
  async deleteUser(@BodyParams() body: DeleteUserRequest) {
    try {
      this.logger.info(`[HasuraWebHookController] Deleting user: ${body.userId}`);

      // Get username from id
      let identity;
      try {
        identity = await this.authService.getUserIdentity(body.userId);
        if (!identity) {
          throw new BadRequest(`User with ID ${body.userId} not found`);
        }
      } catch (error) {
        this.logger.error(`[HasuraWebHookController] Error fetching user identity: ${error.message}`);
        throw new BadRequest(`Failed to retrieve user identity: ${error.message}`);
      }

      const username = identity.traits.username;
      this.logger.debug(`[HasuraWebHookController] Username: ${username}`);

      // Delete the user from Kratos using the Admin API
      this.logger.debug(`[HasuraWebHookController] Deleting user from Kratos`);
      try {
        await this.authService.deleteUser(body.userId);
      } catch (error) {
        this.logger.error(`[HasuraWebHookController] Error deleting user from Kratos: ${error.message}`);
        throw new InternalServerError(`Failed to delete user from authentication system: ${error.message}`);
      }

      // anonymize user profile
      this.logger.debug(`[HasuraWebHookController] Anonymizing user profile`);
      try {
        await this.hasuraService.adminRequest(AnonymizeUserProfileDocument, {
          id: body.userId,
          username: body.userId
        });
      } catch (error) {
        this.logger.error(`[HasuraWebHookController] Error anonymizing user profile: ${error.message}`);
        // Continue with deletion process but log the error
        this.logger.warn(
          `[HasuraWebHookController] Continuing deletion process despite anonymization failure`
        );
      }

      // deactivate user in matrix and set anonymous username
      this.logger.debug(`[HasuraWebHookController] Deactivating user in matrix`);
      try {
        await this.matrixService.deleteUser(username, body.userId);
      } catch (error) {
        this.logger.error(`[HasuraWebHookController] Error deactivating user in matrix: ${error.message}`);
        // Continue with deletion process but log the error
        this.logger.warn(
          `[HasuraWebHookController] Continuing deletion process despite matrix deactivation failure`
        );
      }

      this.logger.debug(`[HasuraWebHookController] Successfully deleted user`);
      // Remove specific user data from Hasura
      return { success: true };
    } catch (error) {
      this.logger.error(`[HasuraWebHookController] Error deleting user: ${error.message}`);

      // If it's already a TS.ED exception, just rethrow it
      if (error instanceof Exception) {
        throw error;
      }

      // Otherwise, wrap it in an InternalServerError
      throw new InternalServerError(`Failed to delete user: ${error.message}`);
    }
  }

  @Post("/activate")
  @Tags("Auth")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, RequestSucessInfo).ContentType("application/json")) // prettier-ignore
  async activateAccount(@BodyParams() body: { userId: string }) {
    try {
      await this.authService.activateUser(body.userId);
      return { success: true };
    } catch (error) {
      this.logger.error(`[HasuraWebHookController] Activation failed: ${error.message}`);
      return { success: false };
    }
  }

  @Post("/request-verification-code")
  @Tags("Auth")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, RequestSucessInfo).ContentType("application/json")) // prettier-ignore
  async resendVerificationEmail(@BodyParams() body: { email: string }) {
    try {
      await this.authService.requestVerificationCode(body.email);
      return { success: true };
    } catch (error) {
      this.logger.error(`[HasuraWebHookController] Resend failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  @Post("/block-account")
  @Tags("Auth")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, RequestSucessInfo).ContentType("application/json")) // prettier-ignore
  async blockAccount(@BodyParams() body: BlockAccountRequest) {
    try {
      this.logger.info(
        `[HasuraWebHookController] ${body.blocked ? "Blocking" : "Unblocking"} user: ${body.userId}`
      );

      let blockedUntil = null;

      // Update user status in Kratos
      await this.authService.updateUserBlockStatus(body.userId, body.blocked, blockedUntil);

      // // If blocking, invalidate all sessions for this user
      // if (body.blocked) {
      //   await this.authService.revokeAllUserSessions(body.userId);
      // }

      this.logger.info(
        `[HasuraWebHookController] Successfully ${body.blocked ? "blocked" : "unblocked"} user: ${body.userId}`
      );
      return { success: true };
    } catch (error) {
      this.logger.error(
        `[HasuraWebHookController] Error ${body.blocked ? "blocking" : "unblocking"} user: ${error.message}`
      );
      return { success: false, error: error.message };
    }
  }

  transformKratosUser(user: Identity) {
    return {
      id: user.id,
      email: user.traits.email,
      username: user.traits.username,
      role: user.metadata_public.role,
      lang: user.metadata_public.lang ?? DEFAULT_LANGUAGE,
      blocked: user.metadata_public.blocked ?? null,
      verified: !!user.verifiable_addresses?.[0]?.verified
    };
  }
}
