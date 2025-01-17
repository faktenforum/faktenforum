// /!\ keep this import

import "@tsed/ajv";
import { PlatformApplication } from "@tsed/common";
import { Configuration, Inject } from "@tsed/di";
import { $log } from "@tsed/logger";
import "@tsed/passport";
import "@tsed/platform-express";
import "@tsed/swagger";
import { config } from "./config/index";
import * as apiV1 from "./controllers/api/v1/index";
import * as pages from "./controllers/pages/index";
import { FileService } from "./services";
import { SetSecurityResponseHeaders } from "~/middlewares";
import helmet from "helmet";

@Configuration({
  ...config,
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 8083,
  httpsPort: false, // CHANGE
  disableComponentsScan: true,
  mount: {
    "/api/v1": [...Object.values(apiV1)],
    "/api/": [...Object.values(pages)]
  },
  middlewares: [
    SetSecurityResponseHeaders,
    "cors",
    "cookie-parser",
    {
      use: "compression",
      options: {
        level: 6,
        threshold: "1kb",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        filter: (req: any, res: any) => {
          // Don't compress responses for specific routes
          if (req.path.startsWith("/api/docs") || req.path === "/api/some-large-route") {
            return false;
          }
          // Use compression for all other routes
          return true;
        }
      }
    },
    "method-override",
    "json-parser",
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: [`'self'`],
          styleSrc: [`'self'`, `'unsafe-inline'`, "https://fonts.googleapis.com"],
          fontSrc: [`'self'`, "https://fonts.gstatic.com"],
          imgSrc: [`'self'`, "data:", "validator.swagger.io", "https://tsed.io"],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`]
        }
      }
    }),
    { use: "urlencoded-parser", options: { extended: true } }
  ],
  cache: { store: "memory" },

  exclude: ["**/*.spec.ts"]
})
export class Server {
  @Inject()
  protected app: PlatformApplication;

  @Configuration()
  protected settings: Configuration;

  @Inject()
  protected fileService: FileService;

  async $onReady() {
    try {
      await this.fileService.ensureBucketExists();
    } catch (error) {
      $log.error("Error checking or creating the bucket:", error);
    }
  }
  async $onDestroy() {
    console.log("Server is shutting down");
    process.exit(0);
  }
}
