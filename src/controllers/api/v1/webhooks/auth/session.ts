import { Controller, Inject } from "@tsed/di";

import { BodyParams, Context } from "@tsed/platform-params";
import { Get, Post, Returns, Tags, Description } from "@tsed/schema";
import { Logger } from "@tsed/common";
import { RequestSuccessResponse, Session, User } from "~/models";

import { AuthService } from "~/services";
import { ApiKeyAccessControlDecorator, UserAccessControlDecorator } from "~/decorators";
import { BadRequest, Unauthorized } from "@tsed/exceptions";

const DEFAULT_LANGUAGE = "de";

@Controller("/webhooks/auth/session")
export class AuthSessionWebHookController {
  @Inject(AuthService)
  authService: AuthService;

  @Inject(Logger)
  logger: Logger;

  @Get("/")
  @Tags("Auth", "Session")
  @UserAccessControlDecorator({ role: "All" })
  @Description("Authentication hook for hasura to get user role for a session")
  @(Returns(200, String).ContentType("application/json")) // prettier-ignore
  async getSession(@Context("user") user: User) {
    this.logger.info(`[AuthSessionWebHookController] User: ${JSON.stringify(user)}`);
    const hasuraSession = {
      "X-Hasura-User-Id": user.userId,
      "X-Hasura-Role": user.role.toLowerCase(),
      "X-Hasura-Lang": user.lang ?? DEFAULT_LANGUAGE,
      "X-Hasura-Username": user.username
    };
    return JSON.stringify(hasuraSession);
  }

  @Post("/list")
  @Tags("Auth", "Session")
  @UserAccessControlDecorator({ role: "All" })
  @Description("Get all sessions for a user his by session cookie used by fafo users")
  @(Returns(200, Array).Of(Session).ContentType("application/json")) // prettier-ignore
  async getSessionsByCookie(@Context("user") user: User, @BodyParams("activeOnly") activeOnly: boolean) {
    const sessions = await this.authService.getAllUserSessions(user.userId, activeOnly);
    return sessions;
  }

  @Post("/revoke-session")
  @Tags("Auth", "Session")
  @Description("Webhook to revoke (invalidate) a specific Ory Kratos session by session ID")
  @UserAccessControlDecorator({ role: "All" })
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, RequestSuccessResponse).ContentType("application/json"))
  async revokeSession(@Context("user") user: User, @BodyParams("sessionId") sessionId: string) {
    this.logger.info(`[HasuraWebHookController] Revoking session: ${sessionId}`);
    if (!sessionId) {
      return { success: false, error: "No sessionId provided" };
    }
    try {
      const session = await this.authService.getUserSession(user.sessionId);
      if (!session) {
        throw new Unauthorized("Not authorized");
      }
      const sessionToRevoke = await this.authService.getUserSessionBySessionId(sessionId);
      this.logger.info(`[HasuraWebHookController] Session to revoke: ${JSON.stringify(sessionToRevoke)}`);
      if (!sessionToRevoke) {
        throw new BadRequest("Session to revoke not found");
      }
      if (sessionToRevoke.identity!.id !== user.userId) {
        throw new Unauthorized("Not authorized");
      }

      await this.authService.revokeSession(sessionId);
      return { success: true };
    } catch (error) {
      this.logger.error(`[HasuraWebHookController] Error revoking session: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  @Post("/refresh")
  @Tags("Auth", "Session")
  @Description("Webhook to check and instruct refresh of the current Ory Kratos session")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @UserAccessControlDecorator({ role: "All" })
  @(Returns(200, RequestSuccessResponse).ContentType("application/json"))
  async refreshSession(@Context("user") user: User) {
    try {
      await this.authService.refreshSession(user.sessionId);
      return { success: true };
    } catch (error) {
      this.logger.error(`[HasuraWebHookController] Error checking session: ${error.message}`);
      return { success: false, error: error.message };
    }
  }
}
