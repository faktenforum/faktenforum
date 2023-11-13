import { readFileSync } from "fs";
import { join } from "path";
import { PassportUser } from "~/models";

import { envs } from "./envs/index";
import loggerConfig from "./logger/index";
import { s3storage } from "./minio";

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
              scheme: "bearer",
              bearerFormat: "JWT",
              description: "JWT Bearer Token authentication"
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
  },
  multer: {
    storage: s3storage
  }
  // additional shared configuration
};
