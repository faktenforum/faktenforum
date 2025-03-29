import { Controller, Inject } from "@tsed/di";
import { Logger } from "@tsed/common";
import { Context, Cookies } from "@tsed/platform-params";
import { Get, Returns } from "@tsed/schema";

import { AuthService, EnvService } from "~/services";

const DEFAULT_LANGUAGE = "de";

@Controller("/webhooks/hasura/auth")
export class HasuraAuthWebHookController {
  @Inject(AuthService)
  authService: AuthService;

  @Inject(EnvService)
  envService: EnvService;
  @Inject(Logger)
  logger: Logger;

  @Get("/session")
  @(Returns(200, String).ContentType("application/json")) // prettier-ignore
  async getSessions(@Cookies("ory_kratos_session") cookieSession: string, @Context() ctx: Context) {
    const sessionCookie = cookieSession || ctx.request.getHeader("ory_kratos_session");

    const session = await this.authService.getUserSession(sessionCookie);

    const hasuraSession = {
      "X-Hasura-User-Id": session.identity!.id,
      "X-Hasura-Role": session.identity!.metadata_public.role.toLowerCase(),
      "X-Hasura-Lang": session.identity!.metadata_public.lang ?? DEFAULT_LANGUAGE,
      "X-Hasura-Username": session.identity!.traits.username,
      Expires: session.expires_at
    };
    return JSON.stringify(hasuraSession);
  }
}
