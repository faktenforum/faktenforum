// /!\ keep this import
import "@tsed/agenda";
import "@tsed/ajv";
import { PlatformApplication } from "@tsed/common";
import { Configuration, Inject } from "@tsed/di";
import "@tsed/passport";
import "@tsed/platform-express";
import "@tsed/swagger";
import { join } from "path";
import "~/protocols";

import { config } from "./config/index";
import * as api from "./controllers/api/index";
import * as pages from "./controllers/pages/index";

@Configuration({
  ...config,
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 8083,
  httpsPort: false, // CHANGE
  disableComponentsScan: true,
  mount: {
    "/api": [...Object.values(api)],
    "/": [...Object.values(pages)]
  },
  middlewares: [
    "cors",
    "cookie-parser",
    "compression",
    "method-override",
    "json-parser",
    { use: "urlencoded-parser", options: { extended: true } }
  ],
  agenda: {
    enabled: true,
    db: {
      address: `mongodb://${process.env.MONGODB_AGENDA_USER}:${process.env.MONGODB_AGENDA_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_AGENDA_DB}`,
      collection: "agendaJobs"
    }
  },

  exclude: ["**/*.spec.ts"]
})
export class Server {
  @Inject()
  protected app: PlatformApplication;

  @Configuration()
  protected settings: Configuration;
}
