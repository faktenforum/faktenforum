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
import { FileService, UsersService } from "./services";

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
    "cors",
    "cookie-parser",
    "compression",
    "method-override",
    "json-parser",
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

  @Inject()
  protected userService: UsersService;

  async $onReady() {
    try {
      await this.fileService.ensureBucketExists();
    } catch (error) {
      $log.error("Error checking or creating the bucket:", error);
    }
  }
}
