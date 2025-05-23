import { Inject, Req } from "@tsed/common";
import { Forbidden } from "@tsed/exceptions";
import { Middleware, MiddlewareMethods } from "@tsed/platform-middlewares";
import { Context } from "@tsed/platform-params";

import { UserRole } from "~/models";
import { AuthService } from "~/services";
import { POWER_LEVELS } from "~/utils/consts";
const sessionCookieName = process.env.KRATOS_SESSION_COOKIE_NAME || "faktenforum_session_dev";

interface AccessControlOptions {
  role: UserRole & "ALL";
}

@Middleware()
export class AccessControlMiddleware implements MiddlewareMethods {
  @Inject(AuthService)
  authService: AuthService;
  public async use(@Req() request: Req, @Context() ctx: Context) {
    // retrieve options given to the @UseAuth decorator
    const options = (ctx.endpoint.get(AccessControlMiddleware) || {}) as AccessControlOptions;

    const session = await this.authService.getUserSession(request.cookies[sessionCookieName]);

    const user: Session = {
      userId: session.identity!.id,
      role: session.identity!.metadata_public.role,
      username: session.identity!.traits.username
    };
    request.user = user;
    if (!options.role || options.role === "ALL") {
      // if no role is given, we assume that the route is accessible to all
      // if role is ALL, we assume that the route is accessible to all
      return;
    }
    if (POWER_LEVELS[user.role] >= POWER_LEVELS[options.role]) {
      return;
    }
    throw new Forbidden("Forbidden");
  }
}
