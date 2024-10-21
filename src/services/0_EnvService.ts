import { Inject, Service } from "@tsed/di";
import { Logger } from "@tsed/common";

type Environment = "production" | "development" | "testing";

@Service()
export class EnvService {
  private readonly validEnvs = ["development", "production"];
  private envVars: { [key: string]: string | undefined } = {};

  @Inject()
  logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
    this.loadEnvVars();
    this.validate();
  }

  private loadEnvVars() {
    this.envVars = {
      API_BASE_URL: process.env.API_BASE_URL,
      MINIO_HOST: process.env.MINIO_HOST,
      MINIO_API_PORT: process.env.MINIO_API_PORT,
      MINIO_BUCKET_NAME: process.env.MINIO_BUCKET_NAME,
      MINIO_ACCESS_KEY: process.env.MINIO_ACCESS_KEY,
      MINIO_SECRET_KEY: process.env.MINIO_SECRET_KEY,
      KRATOS_PUBLIC_URL: process.env.KRATOS_PUBLIC_URL,
      KRATOS_ADMIN_URL: process.env.KRATOS_ADMIN_URL,
      HASURA_API_URL: process.env.HASURA_API_URL,
      HASURA_ADMIN_SECRET: process.env.HASURA_ADMIN_SECRET,
      KRATOS_API_KEY: process.env.KRATOS_API_KEY,
      HASURA_API_KEY: process.env.HASURA_API_KEY,
      HASURA_ENDPOINT: process.env.HASURA_ENDPOINT,
      NODE_ENV: process.env.NODE_ENV,
      MATRIX_URL: process.env.MATRIX_URL,
      MATRIX_PASSWORD: process.env.MATRIX_PASSWORD,
      MATRIX_ACCOUNT: process.env.MATRIX_ACCOUNT,
      MATRIX_DOMAIN: process.env.MATRIX_DOMAIN,
      MATRIX_INTERNAL_URL: process.env.MATRIX_INTERNAL_URL
    };

    // Delete environment variables to prevent security risks
    for (const key in this.envVars) {
      delete process.env[key];
    }
  }

  get baseUrl(): string {
    if (!this.envVars.API_BASE_URL) {
      this.logger.error("API_BASE_URL is not set!");
      process.exit(1);
    }
    return this.envVars.API_BASE_URL;
  }

  get minioHost(): string {
    if (!this.envVars.MINIO_HOST) {
      this.logger.error("MINIO_HOST is not set!");
      process.exit(1);
    }
    return this.envVars.MINIO_HOST;
  }
  get minioApiPort(): number {
    if (!this.envVars.MINIO_API_PORT) {
      this.logger.error("MINIO_API_PORT is not set!");
      process.exit(1);
    }
    return parseInt(this.envVars.MINIO_API_PORT);
  }

  get minioBucketName(): string {
    if (!this.envVars.MINIO_BUCKET_NAME) {
      this.logger.error("MINIO_BUCKET_NAME is not set!");
      process.exit(1);
    }
    return this.envVars.MINIO_BUCKET_NAME;
  }

  get minioAccessKey(): string {
    if (!this.envVars.MINIO_ACCESS_KEY) {
      this.logger.error("MINIO_ACCESS_KEY is not set!");
      process.exit(1);
    }
    return this.envVars.MINIO_ACCESS_KEY;
  }

  get minioSecretKey(): string {
    if (!this.envVars.MINIO_SECRET_KEY) {
      this.logger.error("MINIO_SECRET_KEY is not set!");
      process.exit(1);
    }
    return this.envVars.MINIO_SECRET_KEY;
  }

  get kratosPublicUrl(): string {
    if (!this.envVars.KRATOS_PUBLIC_URL) {
      this.logger.error("KRATOS_PUBLIC_URL is not set!");
      process.exit(1);
    }
    return this.envVars.KRATOS_PUBLIC_URL;
  }
  get kratosAdminUrl(): string {
    if (!this.envVars.KRATOS_ADMIN_URL) {
      this.logger.error("KRATOS_ADMIN_URL is not set!");
      process.exit(1);
    }
    return this.envVars.KRATOS_ADMIN_URL;
  }

  get hasuraApiUrl(): string {
    if (!this.envVars.HASURA_API_URL) {
      this.logger.error("HASURA_API_URL is not set!");
      process.exit(1);
    }
    return this.envVars.HASURA_API_URL;
  }
  get hasuraEndpoint(): string {
    if (!this.envVars.HASURA_ENDPOINT) {
      this.logger.error("HASURA_ENDPOINT is not set!");
      process.exit(1);
    }
    return this.envVars.HASURA_ENDPOINT;
  }

  get hasuraAdminSecret(): string {
    if (!this.envVars.HASURA_ADMIN_SECRET) {
      this.logger.error("HASURA_ADMIN_SECRET is not set!");
      process.exit(1);
    }
    return this.envVars.HASURA_ADMIN_SECRET;
  }

  get matrixAccount(): string {
    if (!this.envVars.MATRIX_ACCOUNT) {
      this.logger.error("MATRIX_ACCOUNT is not set!");
      process.exit(1);
    }
    return this.envVars.MATRIX_ACCOUNT;
  }

  get matrixPassword(): string {
    if (!this.envVars.MATRIX_PASSWORD) {
      this.logger.error("MATRIX_PASSWORD is not set!");
      process.exit(1);
    }
    return this.envVars.MATRIX_PASSWORD;
  }

  get matrixDomain(): string {
    if (!this.envVars.MATRIX_DOMAIN) {
      this.logger.error("MATRIX_DOMAIN is not set!");
      process.exit(1);
    }
    return this.envVars.MATRIX_DOMAIN;
  }

  get matrixInternalUrl(): string {
    if (!this.envVars.MATRIX_INTERNAL_URL) {
      this.logger.error("MATRIX_INTERNAL_URL is not set!");
      process.exit(1);
    }
    return this.envVars.MATRIX_INTERNAL_URL;
  }

  get env(): Environment {
    return (process.env.NODE_ENV || "development") as Environment;
  }

  get apiKeys(): { kratos: string; hasura: string } {
    if (!this.envVars.KRATOS_API_KEY) {
      this.logger.error("KRATOS_API_KEY is not set!");
      process.exit(1);
    }

    if (!this.envVars.HASURA_API_KEY) {
      this.logger.error("HASURA_API_KEY is not set!");
      process.exit(1);
    }

    return {
      kratos: this.envVars.KRATOS_API_KEY,
      hasura: this.envVars.HASURA_API_KEY
    };
  }

  private validate() {
    const errors: string[] = [];
    if (!this.envVars.API_BASE_URL) errors.push("API_BASE_URL is not set!");
    if (!this.envVars.MINIO_HOST) errors.push("MINIO_HOST is not set!");
    if (!this.envVars.MINIO_API_PORT) errors.push("MINIO_API_PORT is not set!");
    if (!this.envVars.MINIO_BUCKET_NAME) errors.push("MINIO_BUCKET_NAME is not set!");
    if (!this.envVars.MINIO_ACCESS_KEY) errors.push("MINIO_ACCESS_KEY is not set!");
    if (!this.envVars.MINIO_SECRET_KEY) errors.push("MINIO_SECRET_KEY is not set!");
    if (!this.envVars.KRATOS_PUBLIC_URL) errors.push("KRATOS_PUBLIC_URL is not set!");
    if (!this.envVars.KRATOS_ADMIN_URL) errors.push("KRATOS_ADMIN_URL is not set!");
    if (!this.envVars.HASURA_API_URL) errors.push("HASURA_API_URL is not set!");
    if (!this.envVars.HASURA_ADMIN_SECRET) errors.push("HASURA_ADMIN_SECRET is not set!");
    if (!this.envVars.HASURA_ENDPOINT) errors.push("HASURA_ENDPOINT is not set!");
    if (!this.envVars.KRATOS_API_KEY) errors.push("KRATOS_API_KEY is not set!");
    if (!this.envVars.HASURA_API_KEY) errors.push("HASURA_API_KEY is not set!");
    if (!this.envVars.MATRIX_ACCOUNT) errors.push("MATRIX_ACCOUNT is not set!");
    if (!this.envVars.MATRIX_PASSWORD) errors.push("MATRIX_PASSWORD is not set!");
    if (!this.envVars.MATRIX_URL) errors.push("MATRIX_URL is not set!");
    if (!this.envVars.MATRIX_DOMAIN) errors.push("MATRIX_DOMAIN is not set!");
    if (!this.envVars.MATRIX_INTERNAL_URL) errors.push("MATRIX_INTERNAL_URL is not set!");
    if (!this.validEnvs.includes(this.env)) {
      errors.push(`NODE_ENV is not set or invalid! It has to be ${this.validEnvs.join(" | ")}`);
    }

    if (errors.length > 0) {
      errors.forEach((error) => this.logger.error(error));
      process.exit(1);
    }
  }

  // ... rest of the class as before
}
