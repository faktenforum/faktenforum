import { Service } from "@tsed/di";
import { $log } from "@tsed/logger";

type Environment = "production" | "development" | "testing";

@Service()
export class EnvService {
  private readonly validEnvs = ["development", "production"];
  constructor() {
    this.validate();
  }

  get jwtSecret(): string {
    return process.env.JWT_SECRET!;
  }

  get jwtRefreshTokenLifetime(): string {
    if (!process.env.JWT_REFRESH_TOKEN_LIFETIME) {
      $log.error("JWT_REFRESH_TOKEN_LIFETIME is not set!");
      process.exit(1);
    }
    return process.env.JWT_REFRESH_TOKEN_LIFETIME;
  }

  get jwtTokenLifetime(): string {
    if (!process.env.JWT_TOKEN_TOKEN_LIFETIME) {
      $log.error("JWT_TOKEN_TOKEN_LIFETIME is not set!");
      process.exit(1);
    }
    return process.env.JWT_TOKEN_TOKEN_LIFETIME;
  }

  get env(): Environment {
    return (process.env.NODE_ENV || "development") as Environment;
  }

  private validate() {
    if (!this.jwtSecret) {
      $log.error("JWT_SECRET is not set!");
      process.exit(1);
    }

    this.jwtRefreshTokenLifetime;

    this.jwtTokenLifetime;

    // TODO add check for string format of Token lifetimes
    // check if env is one of the following values: development, production or undefined

    if (!this.validEnvs.includes(this.env)) {
      $log.error(`NODE_ENV is not set or invalid! It has to be ${this.validEnvs.join(" | ")}`);
      process.exit(1);
    }
  }

  // ... rest of the class as before
}
