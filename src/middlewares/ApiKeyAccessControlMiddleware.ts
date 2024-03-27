import { Inject, Req } from "@tsed/common";
import { Forbidden, Unauthorized } from "@tsed/exceptions";
import { Middleware, MiddlewareMethods } from "@tsed/platform-middlewares";
import { Context } from "@tsed/platform-params";
import { EnvService } from "~/services";

@Middleware()
export class ApiKeyAccessControlMiddleware implements MiddlewareMethods {
  @Inject(EnvService)
  envService: EnvService;
  public async use(@Req() request: Req, @Context() ctx: Context) {
    // retrieve options given to the @UseAuth decorator
    const options = ctx.endpoint.get(ApiKeyAccessControlMiddleware) || {};

    const apiKey = request.headers["x-api-key"];
    if (!apiKey) {
      throw new Unauthorized("x-api-key header is missing");
    }
    if (options.service === "kratos") {
      if (apiKey === this.envService.apiKeys.kratos) {
        return;
      } else {
        throw new Forbidden("Forbidden");
      }
    }
    throw new Forbidden("Forbidden");
  }
}
