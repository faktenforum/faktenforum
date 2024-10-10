import { Inject, Service } from "@tsed/di";
import { $log } from "@tsed/logger";
import * as Minio from "minio";
import type {} from "minio";
import { Readable } from "stream";
import { EnvService } from "~/services";

@Service()
export class FileService {
  @Inject()
  envService: EnvService;

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
        $log.info(`S3 Bucket '${bucketName}' created successfully.`);
      } else {
        $log.info(`S3 Bucket '${bucketName}' already exists.`);
      }
    } catch (error) {
      $log.error("Error ensuring bucket existence:", error);
      throw error;
    }
  }

  // async storeFile(bucketName: string, fileName: string, fileContent: Buffer | ReadableStream, metaData: any) {
  //   await this.minioClient.putObject(bucketName, fileName, fileContent, metaData);
  // }

  getFileStream(key: string): Promise<Readable> {
    return this.minioClient.getObject(this.envService.minioBucketName, key);
  }

  getFileMetaData(key: string): Promise<Minio.BucketItemStat> {
    return this.minioClient.statObject(this.envService.minioBucketName, key);
  }

  async saveFile(key: string, stream: Readable, metaData: Minio.ItemBucketMetadata): Promise<void> {
    try {
      await this.minioClient.putObject(this.envService.minioBucketName, key, stream, undefined, metaData);
    } catch (error) {
      console.error("Error saving file:", error);
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
