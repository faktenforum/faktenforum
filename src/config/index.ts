import { PassportUser } from "@/models";
import { readFileSync } from "fs";
import { join } from "path";

import { envs } from "./envs/index";
import loggerConfig from "./logger/index";

const pkg = JSON.parse(readFileSync("./package.json", { encoding: "utf8" }));

export const config: Partial<TsED.Configuration> = {
  version: pkg.version,
  envs,
  logger: loggerConfig,
  swagger: [
    {
      path: "/doc",
      specVersion: "3.0.1",
      spec: {
        components: {
          securitySchemes: {
            jwt: {
              type: "http",
              scheme: "bearer"
            }
          }
        }
      }
    }
  ],
  passport: {
    disableSession: true,
    userInfoModel: PassportUser
  },
  views: {
    root: join(process.cwd(), "../views"),
    extensions: {
      ejs: "ejs"
    }
  }
  // additional shared configuration
};
