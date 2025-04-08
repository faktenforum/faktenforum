import { Inject, Req } from "@tsed/common";
import { BadRequest, Forbidden, Unauthorized } from "@tsed/exceptions";
import { Middleware, MiddlewareMethods } from "@tsed/platform-middlewares";
import { Context } from "@tsed/platform-params";
import { EnvService } from "~/services";
import { Logger } from "@tsed/common";
import { generateKratosResponse } from "~/utils";

@Middleware()
export class ApiKeyAccessControlMiddleware implements MiddlewareMethods {
  @Inject(EnvService)
  envService: EnvService;

  @Inject(Logger)
  logger: Logger;
  public async use(@Req() request: Req, @Context() ctx: Context) {
    // retrieve options given to the @UseAuth decorator
    const options = ctx.endpoint.get(ApiKeyAccessControlMiddleware) || {};
    const apiKey = request.headers["x-api-key"];

    const serviceMap = {
      kratos: () => {
        if (!apiKey) {
          ctx.response
            .status(400)
            .body(generateKratosResponse("#/server/api-key", 0, "Kratos API key is missing"));
          return;
        }
        if (apiKey !== this.envService.apiKeys.kratos) {
          ctx.response
            .status(403)
            .body(
              generateKratosResponse(
                "#/server/api-key",
                0,
                "Kratos API key is invalid inform your administrator"
              )
            );
          return;
        }
        return;
      },
      hasura: () => {
        if (!apiKey) {
          throw new Unauthorized("x-api-key header is missing");
        }
        if (apiKey !== this.envService.apiKeys.hasura) {
          throw new Forbidden("Forbidden");
        }
        return;
      }
    };
    const method = serviceMap[options.service as keyof typeof serviceMap];
    if (!method) {
      throw new BadRequest("Invalid service");
    }
    method();
  }
}
