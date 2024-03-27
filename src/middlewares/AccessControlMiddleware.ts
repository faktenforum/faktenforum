import { Inject, Req } from "@tsed/common";
import { Forbidden } from "@tsed/exceptions";
import { Middleware, MiddlewareMethods } from "@tsed/platform-middlewares";
import { Context } from "@tsed/platform-params";
import type { SessionDTO } from "~/models";
import { UserRole } from "~/models";
import { AuthService } from "~/services";

@Middleware()
export class AccessControlMiddleware implements MiddlewareMethods {
  @Inject(AuthService)
  authService: AuthService;
  public async use(@Req() request: Req, @Context() ctx: Context) {
    // retrieve options given to the @UseAuth decorator
    const options = ctx.endpoint.get(AccessControlMiddleware) || {};

    const session = await this.authService.getKratosSession(request.cookies["ory_kratos_session"]);

    const user: SessionDTO = {
      userId: session.id,
      role: session.identity.metadata_public.role
    };
    request.user = user;

    if (!options.role || options.role === "ALL") {
      // if no role is given, we assume that the route is accessible to all
      // if role is ALL, we assume that the route is accessible to all
      return;
    }
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

      case UserRole.NEWBIE:
        if (user.role === UserRole.NEWBIE || user.role === UserRole.USER || user.role === UserRole.ADMIN) {
          return;
        }
        break;
    }
    throw new Forbidden("Forbidden");
  }
}
