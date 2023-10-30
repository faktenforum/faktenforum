import { Service } from "@tsed/di";
import { $log } from "@tsed/logger";

type Environment = "production" | "development" | "testing";

@Service()
export class EnvService {
  private readonly validEnvs = ["development", "production"];
  constructor() {
    this.validate();
  }

  get minioHost(): string {
    if (!process.env.MINIO_HOST) {
      $log.error("MINIO_HOST is not set!");
      process.exit(1);
    }
    return process.env.MINIO_HOST;
  }
  get minioApiPort(): string {
    if (!process.env.MINIO_API_PORT) {
      $log.error("MINIO_API_PORT is not set!");
      process.exit(1);
    }
    return process.env.MINIO_API_PORT;
  }
  get minioBucketName(): string {
    if (!process.env.MINIO_BUCKET_NAME) {
      $log.error("MINIO_BUCKET_NAME is not set!");
      process.exit(1);
    }
    return process.env.MINIO_BUCKET_NAME;
  }

  get minioAccessKey(): string {
    if (!process.env.MINIO_ACCESS_KEY) {
      $log.error("MINIO_ACCESS_KEY is not set!");
      process.exit(1);
    }
    return process.env.MINIO_ACCESS_KEY;
  }

  get minioSecretKey(): string {
    if (!process.env.MINIO_SECRET_KEY) {
      $log.error("MINIO_SECRET_KEY is not set!");
      process.exit(1);
    }
    return process.env.MINIO_SECRET_KEY;
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

  get claimSubmissionTokenLifeTime(): string {
    if (!process.env.JWT_TOKEN_TOKEN_LIFETIME) {
      $log.error("CLAIM_SUBMISSION_TOKEN_LIFETIME is not set!");
      process.exit(1);
    }
    return process.env.JWT_TOKEN_TOKEN_LIFETIME;
  }
  get jwtIssuer(): string {
    if (!process.env.JWT_ISSUER) {
      $log.error("JWT_ISSUER is not set!");
      process.exit(1);
    }
    return process.env.JWT_ISSUER;
  }
  get jwtAudience(): string {
    if (!process.env.JWT_AUDIENCE) {
      $log.error("JWT_AUDIENCE is not set!");
      process.exit(1);
    }
    return process.env.JWT_AUDIENCE;
  }
  get mongoDBUri(): string {
    if (!process.env.MONGODB_HOST) {
      $log.error("MONGODB_HOST is not set!");
      process.exit(1);
    }
    if (!process.env.MONGODB_PORT) {
      $log.error("MONGODB_PORT is not set!");
      process.exit(1);
    }
    if (!process.env.MONGODB_AGENDA_DB) {
      $log.error("MONGODB_AGENDA_DB is not set!");
      process.exit(1);
    }
    if (!process.env.MONGODB_ROOT_USER) {
      $log.error("MONGODB_ROOT_USER is not set!");
      process.exit(1);
    }
    if (!process.env.MONGODB_ROOT_PASSWORD) {
      $log.error("MONGODB_ROOT_PASSWORD is not set!");
      process.exit(1);
    }
    return `mongodb://${process.env.MONGODB_ROOT_USER}:${process.env.MONGODB_ROOT_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_AGENDA_DB}`;
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
    this.jwtAudience;
    this.jwtAudience;
    this.mongoDBUri;
    this.claimSubmissionTokenLifeTime;
    this.minioAccessKey;
    this.minioApiPort;
    this.minioBucketName;
    this.minioHost;
    this.minioSecretKey;

    // TODO add check for string format of Token lifetimes
    // check if env is one of the following values: development, production or undefined

    if (!this.validEnvs.includes(this.env)) {
      $log.error(`NODE_ENV is not set or invalid! It has to be ${this.validEnvs.join(" | ")}`);
      process.exit(1);
    }
  }

  // ... rest of the class as before
}
