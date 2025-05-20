import { Controller, Inject } from "@tsed/di";

import { BodyParams, Context, Cookies } from "@tsed/platform-params";
import { Get, Post, Returns, Tags, Description } from "@tsed/schema";
import { Logger } from "@tsed/common";
import { Session } from "~/models";

import { AuthService, EnvService } from "~/services";
import { ApiKeyAccessControlDecorator } from "~/decorators";
const DEFAULT_LANGUAGE = "de";

@Controller("/webhooks/auth/session")
export class AuthSessionWebHookController {
  @Inject(AuthService)
  authService: AuthService;

  @Get("/")
  @Tags("Auth")
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

  @Post("/webhooks/auth/sessions-by-cookie")
  @ApiKeyAccessControlDecorator({ service: "kratos" })
  @Tags("Auth")
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

  @Post("/webhooks/auth/sessions-by-user-id")
  @Tags("Auth")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @Description("Get all sessions for a user by user id used by admin interface")
  @(Returns(200, Array).Of(Session).ContentType("application/json")) // prettier-ignore
  async getSessionsByUserId(
    @BodyParams("userId") userId: string,
    @BodyParams("activeOnly") activeOnly: boolean
  ) {
    const sessions = await this.authService.getAllUserSessions(userId, activeOnly);
    return sessions;
  }
}
