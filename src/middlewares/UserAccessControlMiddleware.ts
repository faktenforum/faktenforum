import { Inject, Req } from "@tsed/common";
import { Forbidden } from "@tsed/exceptions";
import { Middleware, MiddlewareMethods } from "@tsed/platform-middlewares";
import { Context } from "@tsed/platform-params";
import { Logger } from "@tsed/common";
import { UserRole, User } from "~/models";
import { AuthService, EnvService } from "~/services";

interface UserAccessControlOptions {
  role: UserRole | "All";
}

@Middleware()
export class UserAccessControlMiddleware implements MiddlewareMethods {
  @Inject(EnvService)
  envService: EnvService;
  @Inject(AuthService)
  authService: AuthService;
  @Inject(Logger)
  logger: Logger;
  public async use(@Req() request: Req, @Context() ctx: Context) {
    // retrieve options given to the @UseAuth decorator
    const options = (ctx.endpoint.get(UserAccessControlMiddleware) || {}) as UserAccessControlOptions;

    const session = await this.authService.getUserSession(
      request.cookies[this.envService.kratosSessionCookieName]
    );

    const user: User = {
      userId: session.identity!.id,
      role: session.identity!.metadata_public.role,
      username: session.identity!.traits.username,
      lang: session.identity!.metadata_public.lang,
      sessionId: session.id
    };
    ctx.set("user", user);

    if (!options.role || options.role === "All" || options.role === user.role) {
      // if no role is given, we assume that the route is accessible to all
      // if role is ALL, we assume that the route is accessible to all
      return;
    }

    throw new Forbidden("Forbidden");
  }
}
