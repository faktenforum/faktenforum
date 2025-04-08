import { Inject, Req } from "@tsed/common";
import { Forbidden, Unauthorized } from "@tsed/exceptions";
import { Middleware, MiddlewareMethods } from "@tsed/platform-middlewares";
import { Context } from "@tsed/platform-params";
import { EnvService } from "~/services";
import { Logger } from "@tsed/common";

@Middleware()
export class ApiKeyAccessControlMiddleware implements MiddlewareMethods {
  @Inject(EnvService)
  @Inject(Logger)
  envService: EnvService;

  logger: Logger;
  public async use(@Req() request: Req, @Context() ctx: Context) {
    // retrieve options given to the @UseAuth decorator
    const options = ctx.endpoint.get(ApiKeyAccessControlMiddleware) || {};
    const apiKey = request.headers["x-api-key"];
    this.logger.info(`[ApiKeyAccessControlMiddleware] API Key: ${apiKey}`);
    if (!apiKey) {
      throw new Unauthorized("x-api-key header is missing");
    }
    if (options.service === "kratos") {
      if (apiKey === this.envService.apiKeys.kratos) {
        this.logger.info("Kratos API key is valid");
        return;
      }
    } else if (options.service === "hasura") {
      if (apiKey === this.envService.apiKeys.hasura) {
        return;
      }
    }

    throw new Forbidden("Forbidden");
  }
}
