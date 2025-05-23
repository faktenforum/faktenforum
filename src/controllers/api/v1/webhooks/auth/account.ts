import { Controller, Inject } from "@tsed/di";
import { Logger } from "@tsed/common";
import { BodyParams, Context } from "@tsed/platform-params";
import { Post, Returns, Tags, Description } from "@tsed/schema";

import { ApiKeyAccessControlDecorator, UserAccessControlDecorator } from "~/decorators";
import {
  AccountSchema,
  UpdateUserRoleRequest,
  DeleteUserRequest,
  GetAccountsDetailsRequest,
  GetAccountRoleRequest,
  BlockAccountRequest,
  RequestSuccessResponse,
  GetUserRoleResponse,
  ForKratosResponse,
  User
} from "~/models";
import { AuthService, HasuraService, MatrixService } from "~/services";
import { Identity } from "@ory/kratos-client";
import {
  AnonymizeUserProfileDocument,
  UpdateUserRoleDocument,
  UpdateUserVerifiedDocument,
  UpdateUserBlockedDocument
} from "~/generated/graphql";
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

  @Post("/details")
  @Tags("Auth")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, Array).Of(AccountSchema))
  async getUsersWithAccountDetails(@BodyParams() body: GetAccountsDetailsRequest) {
    const result = await this.authService.getAllUsers(undefined, undefined, body.ids);
    return result.identities.map((user) => ({
      id: user.id,
      role: user.metadata_public.role,
      verified: !!user.verifiable_addresses?.[0]?.verified,
      blocked: user.metadata_public.blocked
    }));
  }

  @Post("/role")
  @Tags("Auth")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, GetUserRoleResponse).ContentType("application/json")) // prettier-ignore
  async getRole(@BodyParams() body: GetAccountRoleRequest) {
    const result = await this.authService.getUserIdentity(body.id);
    return {
      id: result.id,
      role: result.metadata_public.role
    };
  }

  @Post("/update-role")
  @Tags("Auth")
  @Description("Webhook used by Hasura to update the role of a user")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, AccountSchema).ContentType("application/json")) // prettier-ignore
  async updateUserRole(@BodyParams() body: UpdateUserRoleRequest) {
    this.matrixService.alterSpaceMembershipsByRole(body.userId, body.role);
    const kratosUser = await this.authService.updateUserRole(body.userId, body.role);
    await this.hasuraService.adminRequest(UpdateUserRoleDocument, {
      id: body.userId,
      role: body.role
    });
    return this.transformKratosUser(kratosUser as Identity);
  }

  @Post("/delete-by-id")
  @Tags("Auth")
  @Description("Webhook used by Hasura to delete a user by id used by fafo admin interface")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, RequestSuccessResponse).Description("Successfully deleted the user").ContentType("application/json")) // prettier-ignore
  async deleteUserById(@BodyParams() body: DeleteUserRequest) {
    this.logger.info(`[HasuraWebHookController] Deleting user: ${body.userId}`);
    return this.deleteUser(body.userId);
  }

  @Post("/delete-by-session")
  @Tags("Auth")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @UserAccessControlDecorator({ role: "All" })
  @Description("Webhook used by Hasura to delete a user by his kratos session, used by fafo users")
  @(Returns(200, RequestSuccessResponse).Description("Successfully deleted the user").ContentType("application/json")) // prettier-ignore
  async deleteUserBySession(@Context("user") user: User) {
    this.logger.info(`[HasuraWebHookController] Deleting user by Session`);
    return this.deleteUser(user.userId);
  }

  @Post("/verify")
  @Tags("Auth")
  @Description("Webhook used by Hasura to verify a user's email address manually")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, RequestSuccessResponse).ContentType("application/json")) // prettier-ignore
  async verifyEmailAddress(@BodyParams() body: { userId: string }) {
    try {
      await this.authService.verifyUserEmail(body.userId);
      await this.hasuraService.adminRequest(UpdateUserVerifiedDocument, {
        id: body.userId,
        verified: true
      });
      return { success: true };
    } catch (error) {
      this.logger.error(`[HasuraWebHookController] Activation failed: ${error.message}`);
      return { success: false };
    }
  }

  @Post("/verification/complete")
  @Description("Webhook used by Kratos to set user as verified after verification flow")
  @ApiKeyAccessControlDecorator({ service: "kratos" })
  @Returns(200, ForKratosResponse)
  @Tags("Auth")
  @(Returns(200, RequestSuccessResponse).ContentType("application/json")) // prettier-ignore
  async afterVerification(@BodyParams() body: any) {
    try {
      await this.hasuraService.adminRequest(UpdateUserVerifiedDocument, {
        id: body.id,
        verified: true
      });
      return {
        messages: []
      };
    } catch (error) {
      this.logger.error(`[HasuraWebHookController] Activation failed: ${error.message}`);
      return {
        messages: [
          {
            type: "error",
            text: error.message
          }
        ]
      };
    }
  }

  @Post("/request-verification-code")
  @Tags("Auth")
  @Description(
    "Webhook used by Hasura to request a verification code for a user manually by admin. A new code is send to the user's email address"
  )
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, RequestSuccessResponse).ContentType("application/json")) // prettier-ignore
  async resendVerificationEmail(@BodyParams() body: { email: string }) {
    try {
      await this.authService.requestVerificationCode(body.email);
      return { success: true };
    } catch (error) {
      this.logger.error(`[HasuraWebHookController] Resend failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  @Post("/block")
  @Tags("Auth")
  @Description("Webhook used by Hasura to block a user by admin")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, RequestSuccessResponse).ContentType("application/json")) // prettier-ignore
  async blockAccount(@BodyParams() body: BlockAccountRequest) {
    try {
      this.logger.info(
        `[HasuraWebHookController] ${body.blocked ? "Blocking" : "Unblocking"} user: ${body.userId}`
      );

      // Update user status in Kratos
      await this.authService.updateUserBlockStatus(body.userId, body.blocked, body.blockedUntil);
      await this.hasuraService.adminRequest(UpdateUserBlockedDocument, {
        id: body.userId,
        blocked: body.blocked,
        blockedUntil: body.blockedUntil
      });
      // If blocking, invalidate all sessions for this user
      if (body.blocked) {
        await this.authService.revokeAllUserSessions(body.userId);
        await this.matrixService.deactivateUser(body.userId);
      } else {
        await this.matrixService.reactivateUser(body.userId);
      }

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

  async deleteUser(userId: string) {
    try {
      let identity;
      try {
        identity = await this.authService.getUserIdentity(userId);
        if (!identity) {
          throw new BadRequest(`User with ID ${userId} not found`);
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
        await this.authService.deleteUser(userId);
      } catch (error) {
        this.logger.error(`[HasuraWebHookController] Error deleting user from Kratos: ${error.message}`);
        throw new InternalServerError(`Failed to delete user from authentication system: ${error.message}`);
      }

      // anonymize user profile
      this.logger.debug(`[HasuraWebHookController] Anonymizing user profile`);
      try {
        await this.hasuraService.adminRequest(AnonymizeUserProfileDocument, {
          id: userId,
          username: userId
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
        await this.matrixService.deleteUser(username, userId);
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
}
