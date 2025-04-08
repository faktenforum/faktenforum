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

    try {
      const session = await this.authService.getUserSession(sessionCookie);

      // Format the expiration date for Hasura
      // Convert to seconds since epoch (Unix timestamp)
      const expiresTimestamp = Math.floor(new Date(session.expires_at || 0).getTime() / 1000);

      const blocked = session.identity?.metadata_public?.blocked;
      if (blocked) {
        const now = new Date();
        const blockedUntil = blocked.until ? new Date(blocked.until) : null;

        // If block has expired, unblock the user
        if (blockedUntil && now > blockedUntil) {
          await this.authService.updateUserBlockStatus(session.identity!.id, false);
        } else {
          // User is still blocked - return a session with restricted permissions
          // instead of throwing an error
          this.logger.info(`Blocked user ${session.identity!.id} attempted to access the API`);
          return JSON.stringify({
            "X-Hasura-User-Id": session.identity!.id,
            "X-Hasura-Role": "blocked", // Use a restricted role
            "X-Hasura-Lang": session.identity!.metadata_public.lang ?? DEFAULT_LANGUAGE,
            "X-Hasura-Username": session.identity!.traits.username,
            "X-Hasura-Blocked": "true",
            "X-Hasura-Blocked-Until": blocked.until || "",
            "Cache-Control": "max-age=0, no-store, must-revalidate",
            Expires: expiresTimestamp.toString()
          });
        }
      }

      const hasuraSession = {
        "X-Hasura-User-Id": session.identity!.id,
        "X-Hasura-Role": session.identity!.metadata_public.role.toLowerCase(),
        "X-Hasura-Lang": session.identity!.metadata_public.lang ?? DEFAULT_LANGUAGE,
        "X-Hasura-Username": session.identity!.traits.username,
        "Cache-Control": "max-age=0, no-store, must-revalidate",
        Expires: expiresTimestamp.toString()
      };
      return JSON.stringify(hasuraSession);
    } catch (error) {
      // Handle session validation errors by returning a default anonymous session
      this.logger.error("Session validation error:", error);
      return JSON.stringify({
        "X-Hasura-Role": "anonymous",
        "X-Hasura-User-Id": "",
        "Cache-Control": "max-age=0, no-store, must-revalidate",
        Expires: Math.floor(Date.now() / 1000).toString() // Current time as Unix timestamp
      });
    }
  }
}
