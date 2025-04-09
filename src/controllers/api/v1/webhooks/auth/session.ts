import { Controller, Inject } from "@tsed/di";

import { Context, Cookies } from "@tsed/platform-params";
import { Get, Returns, Tags } from "@tsed/schema";

import { AuthService, EnvService } from "~/services";

const DEFAULT_LANGUAGE = "de";

@Controller("/webhooks/auth/session")
export class AuthSessionWebHookController {
  @Inject(AuthService)
  authService: AuthService;

  @Get("/")
  @Tags("Auth")
  @(Returns(200, String).ContentType("application/json")) // prettier-ignore
  async getSessions(@Cookies("ory_kratos_session") cookieSession: string, @Context() ctx: Context) {
    const sessionCookie = cookieSession || ctx.request.getHeader("ory_kratos_session");

    const session = await this.authService.getUserSession(sessionCookie);

    const hasuraSession = {
      "X-Hasura-User-Id": session.identity!.id,
      "X-Hasura-Role": session.identity!.metadata_public.role.toLowerCase(),
      "X-Hasura-Lang": session.identity!.metadata_public.lang ?? DEFAULT_LANGUAGE,
      "X-Hasura-Username": session.identity!.traits.username,
      "Cache-Control": "max-age=0, no-store, must-revalidate"
    };
    return JSON.stringify(hasuraSession);
  }
}
