import { Inject, Service } from "@tsed/di";
import { $log } from "@tsed/logger";
import { file, PrismaClient } from "@prisma/client";
import { SIZES } from "~/utils/consts"; // Adjust the path as per your project structure
import * as Minio from "minio";
import type {} from "minio";
import { Readable } from "stream";
import { EnvService } from "~/services";

@Service()
export class FileService {
  @Inject()
  envService: EnvService;

  private prisma: PrismaClient;

  private minioClient: Minio.Client;

  constructor(envService: EnvService) {
    this.minioClient = new Minio.Client({
      endPoint: envService.minioHost,
      port: envService.minioApiPort,
      useSSL: false, // or false, depending on your Minio setup
      accessKey: envService.minioAccessKey,
      secretKey: envService.minioSecretKey
    });
    this.prisma = new PrismaClient();
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

  async saveFile(key: string, stream: Readable, metaData: Minio.MetadataItem): Promise<void> {
    try {
      console.log("Saving file:" + key + " to bucket: " + this.envService.minioBucketName);
      await this.minioClient.putObject(this.envService.minioBucketName, key, stream, metaData);
      console.log("File saved successfully");
    } catch (error) {
      console.error("Error saving file:", error);
    }
  }

  async deleteFile(key: string) {
    return Promise.all([
      ...SIZES.map((size) => {
        return this.minioClient.removeObject(this.envService.minioBucketName, `${key}/${size.key}`);
      }),
      this.minioClient.removeObject(this.envService.minioBucketName, key)
    ]);
  }

  async deleteFiles(keys: string[]) {
    await Promise.all(
      keys.map((key: string) => {
        this.deleteFile(key);
      })
    );
  }
  // TODO: Replace with Hasura Request
  getClaimFileMetaData(claimId: string, fileId: string): Promise<file | null> {
    return this.prisma.file.findFirst({
      where: {
        id: fileId,
        origin: {
          some: {
            claim_id: claimId
          }
        }
      }
    });
  }
}
