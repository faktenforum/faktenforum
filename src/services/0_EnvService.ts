import { Service } from "@tsed/di";
import { $log } from "@tsed/logger";

type Environment = "production" | "development" | "testing";

@Service()
export class EnvService {
  private readonly validEnvs = ["development", "production"];
  constructor() {
    this.validate();
  }

  get baseUrl(): string {
    if (!process.env.API_BASE_URL) {
      $log.error("API_BASE_URL is not set!");
      process.exit(1);
    }
    return process.env.API_BASE_URL;
  }

  get claimSubmissionTokenLifeTime(): string {
    if (!process.env.CLAIM_SUBMISSION_TOKEN_LIFETIME) {
      $log.error("CLAIM_SUBMISSION_TOKEN_LIFETIME is not set!");
      process.exit(1);
    }
    return process.env.CLAIM_SUBMISSION_TOKEN_LIFETIME;
  }

  get minioHost(): string {
    if (!process.env.MINIO_HOST) {
      $log.error("MINIO_HOST is not set!");
      process.exit(1);
    }
    return process.env.MINIO_HOST;
  }
  get minioApiPort(): number {
    if (!process.env.MINIO_API_PORT) {
      $log.error("MINIO_API_PORT is not set!");
      process.exit(1);
    }
    return parseInt(process.env.MINIO_API_PORT);
  }
  get minioRegion(): string {
    if (!process.env.MINIO_REGION) {
      $log.error("MINIO_REGION is not set!");
      process.exit(1);
    }
    return process.env.MINIO_REGION;
  }

  get minioEndpoint(): string {
    return `http://${this.minioHost}:${this.minioApiPort}`;
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

  get kratosPublicUrl(): string {
    if (!process.env.KRATOS_PUBLIC_URL) {
      $log.error("KRATOS_PUBLIC_URL is not set!");
      process.exit(1);
    }
    return process.env.KRATOS_PUBLIC_URL;
  }
  get kratosAdminUrl(): string {
    if (!process.env.KRATOS_ADMIN_URL) {
      $log.error("KRATOS_ADMIN_URL is not set!");
      process.exit(1);
    }
    return process.env.KRATOS_ADMIN_URL;
  }

  get hasuraApiUrl(): string {
    if (!process.env.HASURA_API_URL) {
      $log.error("HASURA_API_URL is not set!");
      process.exit(1);
    }
    return process.env.HASURA_API_URL;
  }

  get hasuraAdminSecret(): string {
    if (!process.env.HASURA_ADMIN_SECRET) {
      $log.error("HASURA_ADMIN_SECRET is not set!");
      process.exit(1);
    }
    return process.env.HASURA_ADMIN_SECRET;
  }

  get env(): Environment {
    return (process.env.NODE_ENV || "development") as Environment;
  }

  get apiKeys(): { kratos: string; hasura: string } {
    if (!process.env.KRATOS_API_KEY) {
      $log.error("KRATOS_API_KEY is not set!");
      process.exit(1);
    }

    if (!process.env.HASURA_API_KEY) {
      $log.error("HASURA_API_KEY is not set!");
      process.exit(1);
    }

    return {
      kratos: process.env.KRATOS_API_KEY,
      hasura: process.env.HASURA_API_KEY
    };
  }

  private validate() {
    /* eslint-disable @typescript-eslint/no-unused-expressions */
    this.baseUrl;
    this.hasuraApiUrl;
    this.kratosPublicUrl;
    this.claimSubmissionTokenLifeTime;
    this.minioAccessKey;
    this.minioApiPort;
    this.minioBucketName;
    this.minioHost;
    this.minioSecretKey;
    this.minioRegion;
    /* eslint-enable @typescript-eslint/no-unused-expressions */
    // TODO add check for string format of Token lifetimes
    // check if env is one of the following values: development, production or undefined

    if (!this.validEnvs.includes(this.env)) {
      $log.error(`NODE_ENV is not set or invalid! It has to be ${this.validEnvs.join(" | ")}`);
      process.exit(1);
    }
  }

  // ... rest of the class as before
}
