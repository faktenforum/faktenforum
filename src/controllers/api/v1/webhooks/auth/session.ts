import { Controller, Inject } from "@tsed/di";

import { BodyParams, Context, Cookies } from "@tsed/platform-params";
import { Get, Post, Returns, Tags, Description } from "@tsed/schema";
import { Logger } from "@tsed/common";
import { RequestSuccessResponse, Session } from "~/models";

import { AuthService, EnvService } from "~/services";
import { ApiKeyAccessControlDecorator } from "~/decorators";
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
  @Description("Authentication hook for hasura to get user role for a session")
  @(Returns(200, String).ContentType("application/json")) // prettier-ignore
  async getSession(@Cookies("ory_kratos_session") cookieSession: string, @Context() ctx: Context) {
    const sessionCookie = cookieSession || ctx.request.getHeader("ory_kratos_session");

    const session = await this.authService.getUserSession(sessionCookie);

    const hasuraSession = {
      "X-Hasura-User-Id": session.identity!.id,
      "X-Hasura-Role": session.identity!.metadata_public.role.toLowerCase(),
      "X-Hasura-Lang": session.identity!.metadata_public.lang ?? DEFAULT_LANGUAGE,
      "X-Hasura-Username": session.identity!.traits.username
    };
    return JSON.stringify(hasuraSession);
  }

  @Post("/list")
  @Tags("Auth", "Session")
  @Description("Get all sessions for a user his by session cookie used by fafo users")
  @(Returns(200, Array).Of(Session).ContentType("application/json")) // prettier-ignore
  async getSessionsByCookie(
    @Cookies("ory_kratos_session") cookieSession: string,
    @Context() ctx: Context,
    @BodyParams("activeOnly") activeOnly: boolean
  ) {
    const sessionCookie = cookieSession || ctx.request.getHeader("ory_kratos_session");
    const session = await this.authService.getUserSession(sessionCookie);
    if (!session) {
      throw new Error("Session not found");
    }
    const sessions = await this.authService.getAllUserSessions(session.identity!.id, activeOnly);
    return sessions;
  }

  @Post("/revoke-session")
  @Tags("Auth", "Session")
  @Description("Webhook to revoke (invalidate) a specific Ory Kratos session by session ID")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, RequestSuccessResponse).ContentType("application/json"))
  async revokeSession(
    @Cookies("ory_kratos_session") cookieSession: string,
    @Context() ctx: Context,
    @BodyParams("sessionId") sessionId: string
  ) {
    this.logger.info(`[HasuraWebHookController] Revoking session: ${sessionId}`);
    if (!sessionId) {
      return { success: false, error: "No sessionId provided" };
    }
    try {
      const sessionCookie = cookieSession || ctx.request.getHeader("ory_kratos_session");
      const session = await this.authService.getUserSession(sessionCookie);
      if (!session) {
        throw new Unauthorized("Not authorized");
      }
      const sessionToRevoke = await this.authService.getUserSessionBySessionId(sessionId);
      this.logger.info(`[HasuraWebHookController] Session to revoke: ${JSON.stringify(sessionToRevoke)}`);
      if (!sessionToRevoke) {
        throw new BadRequest("Session to revoke not found");
      }
      if (sessionToRevoke.identity!.id !== session.identity!.id) {
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
  @(Returns(200, RequestSuccessResponse).ContentType("application/json"))
  async refreshSession(@Cookies("ory_kratos_session") cookieSession: string, @Context() ctx: Context) {
    const sessionCookie = cookieSession || ctx.request.getHeader("ory_kratos_session");

    if (!sessionCookie) {
      throw new BadRequest("No session cookie found");
    }

    try {
      const session = await this.authService.getUserSession(sessionCookie);
      if (!session) {
        throw new BadRequest("Session not found");
      }
      await this.authService.refreshSession(session.id);
      return { success: true };
    } catch (error) {
      this.logger.error(`[HasuraWebHookController] Error checking session: ${error.message}`);
      return { success: false, error: error.message };
    }
  }
}
