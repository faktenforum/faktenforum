import { Inject, Service } from "@tsed/di";
import { Logger } from "@tsed/common";
import * as Minio from "minio";
import type {} from "minio";
import { Readable } from "stream";
import { EnvService } from "~/services";
import { v4 as uuidv4 } from "uuid";
@Service()
export class FileService {
  @Inject()
  envService: EnvService;

  @Inject()
  logger: Logger;

  private minioClient: Minio.Client;

  constructor(envService: EnvService) {
    this.minioClient = new Minio.Client({
      endPoint: envService.minioHost,
      port: envService.minioApiPort,
      useSSL: false, // or false, depending on your Minio setup
      accessKey: envService.minioAccessKey,
      secretKey: envService.minioSecretKey
    });
  }

  async ensureBucketExists(): Promise<void> {
    try {
      const bucketName = this.envService.minioBucketName;
      const bucketExists = await this.minioClient.bucketExists(bucketName);
      if (!bucketExists) {
        await this.minioClient.makeBucket(bucketName, "eu-de-1"); // Replace 'us-east-1' with your preferred region if different.
        this.logger.info(`S3 Bucket '${bucketName}' created successfully.`);
      } else {
        this.logger.info(`S3 Bucket '${bucketName}' already exists.`);
      }
    } catch (error) {
      this.logger.error("Error ensuring bucket existence:", error);
      throw error;
    }
  }

  getFileStream(key: string): Promise<Readable> {
    return this.minioClient.getObject(this.envService.minioBucketName, key);
  }

  getFileMetaData(key: string): Promise<Minio.BucketItemStat> {
    return this.minioClient.statObject(this.envService.minioBucketName, key);
  }

  async saveFile(
    key: string | undefined = uuidv4(),
    content: Readable | string,
    metaData: Minio.ItemBucketMetadata
  ): Promise<string> {
    try {
      let stream: Readable;
      if (typeof content === "string") {
        stream = Readable.from(content);
      } else {
        stream = content;
      }

      await this.minioClient.putObject(
        this.envService.minioBucketName,
        key,
        stream,
        undefined, // Let Minio handle the content length
        metaData
      );
      this.logger.info(`File '${key}' saved successfully.`);
      return key;
    } catch (error) {
      this.logger.error("Error saving file:", error);
      throw error; // Re-throw the error to allow the caller to handle it
    }
  }

  async deleteFile(key: string) {
    return this.minioClient.removeObject(this.envService.minioBucketName, key);
  }

  async deleteFiles(keys: string[]) {
    await Promise.all(
      keys.map((key: string) => {
        this.deleteFile(key);
      })
    );
  }
}
