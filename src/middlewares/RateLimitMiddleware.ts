import { Context } from "@tsed/platform-params";
import { Middleware, MiddlewareMethods } from "@tsed/platform-middlewares";
import rateLimit from "express-rate-limit";

interface RateLimitOptions {
  windowMs?: number;
  max?: number;
}

@Middleware()
export class RateLimitMiddleware implements MiddlewareMethods {
  private options: RateLimitOptions;

  public use(@Context() ctx: Context) {
    const options = (ctx.endpoint.get(RateLimitMiddleware) || {}) as RateLimitOptions;
    const _options = {
      windowMs: options.windowMs || 1 * 60 * 1000, // default to 15 minutes
      max: options.max || 4 // default to 100 requests per windowMs
    };
    return rateLimit({
      windowMs: _options.windowMs,
      max: _options.max,
      message: "Too many requests, please try again later."
    });
  }
}
