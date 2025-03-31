import { Controller, Inject } from "@tsed/di";
import { Logger } from "@tsed/common";
import { Context, Cookies } from "@tsed/platform-params";
import { Get, Returns, Tags } from "@tsed/schema";
import { Forbidden } from "@tsed/exceptions";

import { AuthService, EnvService } from "~/services";

const DEFAULT_LANGUAGE = "de";

@Controller("/webhooks/auth/session")
export class AuthSessionWebHookController {
  @Inject(AuthService)
  authService: AuthService;

  @Inject(EnvService)
  envService: EnvService;
  @Inject(Logger)
  logger: Logger;

  @Get("/")
  @Tags("Auth")
  @(Returns(200, String).ContentType("application/json")) // prettier-ignore
  async getSessions(@Cookies("ory_kratos_session") cookieSession: string, @Context() ctx: Context) {
    const sessionCookie = cookieSession || ctx.request.getHeader("ory_kratos_session");

    const session = await this.authService.getUserSession(sessionCookie);

    const blocked = session.identity?.metadata_public?.blocked;
    if (blocked) {
      const now = new Date();
      const blockedUntil = blocked.until ? new Date(blocked.until) : null;

      // If block has expired, unblock the user
      if (blockedUntil && now > blockedUntil) {
        await this.authService.updateUserBlockStatus(session.identity!.id, false);
      } else {
        // User is still blocked
        const message = blockedUntil
          ? `User account is blocked until ${blockedUntil}`
          : "User account is blocked indefinitely";
        throw new Forbidden(message);
      }
    }
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
