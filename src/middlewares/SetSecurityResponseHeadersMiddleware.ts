// src/middlewares/CspMiddleware.ts
import { Middleware, Req, Res, Next } from "@tsed/common";
import helmet from "helmet";

@Middleware()
export class SetSecurityResponseHeaders {
  private cspDefault = helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"], // Disallow inline scripts
      styleSrc: ["'self'"],
      imgSrc: ["'self'"]
      // Add other directives as needed
    }
  });

  private cspRelaxed = helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      imgSrc: ["'self'", "data:"]
      // Add other directives as needed
    }
  });

  use(@Req() req: Req, @Res() res: Res, @Next() next: Next) {
    if (req.originalUrl.startsWith("/api/doc")) {
      // Apply relaxed CSP for /api and /api/docs routes
      this.cspRelaxed(req, res, next);
    } else {
      // Apply default CSP for all other routes
      this.cspDefault(req, res, next);
    }
  }
}
