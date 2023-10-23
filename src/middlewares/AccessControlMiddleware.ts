import { UserRole } from "@prisma/client";
import { Req } from "@tsed/common";
import { Forbidden, Unauthorized } from "@tsed/exceptions";
import { Middleware, MiddlewareMethods } from "@tsed/platform-middlewares";
import { Context } from "@tsed/platform-params";

@Middleware()
export class AccessControlMiddleware implements MiddlewareMethods {
  public use(@Req() request: Req, @Context() ctx: Context) {
    // retrieve options given to the @UseAuth decorator
    const options = ctx.endpoint.get(AccessControlMiddleware) || {};

    if (!request.isAuthenticated()) {
      // passport.js method to check auth
      throw new Unauthorized("Unauthorized");
    }
    if (!options.role || options.role === "ALL") {
      // if no role is given, we assume that the route is accessible to all
      // if role is ALL, we assume that the route is accessible to all
      return;
    }
    const user = request.user as any;
    switch (options.role) {
      // This Route is only accessible to Admins
      case UserRole.ADMIN:
        if (user.role === UserRole.ADMIN) {
          return;
        }
        break;
      // This Route is accessible to Users and Admins
      case UserRole.USER:
        if (user.role === UserRole.USER || user.role === UserRole.ADMIN) {
          return;
        }
        break;
    }
    throw new Forbidden("Forbidden");
  }
}
