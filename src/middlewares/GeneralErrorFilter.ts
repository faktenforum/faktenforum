import { Catch, PlatformContext, ExceptionFilterMethods, ResponseErrorObject } from "@tsed/common";
import { Inject } from "@tsed/di";
import { EnvService } from "~/services";
import { Exception } from "@tsed/exceptions";
//** Global Error Filter for all exceptions is used automatically by tsed */
@Catch(Exception)
export class GeneralErrorFilter implements ExceptionFilterMethods {
  @Inject(EnvService)
  envService: EnvService;
  catch(exception: Exception, ctx: PlatformContext) {
    const { response, logger } = ctx;
    const error = this.mapError(exception);
    const headers = this.getHeaders(exception);
    console.log(error);
    logger.error({ error });

    response
      .setHeaders(headers)
      .status(error.status || 500)
      .body(error);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mapError(error: any) {
    return {
      name: error.origin?.name || error.name,
      message: error.message,
      status: error.status || 500,
      errors: this.getErrors(error),
      // Only show stack trace in development mode for errors with status code 500 or higher
      stack:
        this.envService.env === "development" && (!error.status || error.status >= 500)
          ? error.stack
          : undefined
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected getErrors(error: any) {
    return [error, error.origin].filter(Boolean).reduce((errs, { errors }: ResponseErrorObject) => {
      return [...errs, ...(errors || [])];
    }, []);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected getHeaders(error: any) {
    return [error, error.origin].filter(Boolean).reduce((obj, { headers }: ResponseErrorObject) => {
      return { ...obj, ...(headers || {}) };
    }, {});
  }
}
