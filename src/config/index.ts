import { readFileSync } from "fs";

import { envs } from "./envs/index";
import loggerConfig from "./logger/index";

const pkg = JSON.parse(readFileSync("./package.json", { encoding: "utf8" }));

export const config: Partial<TsED.Configuration> = {
  version: pkg.version,
  envs,
  logger: loggerConfig
  // additional shared configuration
};

export function ensureEnvironmentVariables() {
  const requiredEnvVars = ["JWT_SECRET", "JWT_REFRESH_TOKEN_LIFETIME", "JWT_TOKEN_TOKEN_LIFETIME"];

  for (const varName of requiredEnvVars) {
    if (!process.env[varName]) {
      throw new Error(`Environment variable ${varName} is not set.`);
    }
  }
}
