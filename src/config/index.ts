import { PassportCustomUser } from "@/models";
import { PrismaClient, User } from "@prisma/client";
import { UserInfo } from "@tsed/passport";
import { Produces } from "@tsed/schema";
import { readFileSync } from "fs";

import { envs } from "./envs/index";
import loggerConfig from "./logger/index";

const pkg = JSON.parse(readFileSync("./package.json", { encoding: "utf8" }));

export const config: Partial<TsED.Configuration> = {
  version: pkg.version,
  envs,
  logger: loggerConfig,
  passport: {
    disableSession: true,
    userInfoModel: PassportCustomUser
  }
  // additional shared configuration
};
