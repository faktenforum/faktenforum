import { Inject, Service } from "@tsed/di";
import { $log } from "@tsed/logger";
import { file, PrismaClient } from "@prisma/client";

import * as Minio from "minio";
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

  getClaimFileMetaData(claimId: string, fileId: string): Promise<file | null> {
    return this.prisma.file.findFirst({
      where: {
        id: fileId,
        claim_resource: {
          some: {
            claim_id: claimId
          }
        }
      }
    });
  }

  getFactFileMetaData(factId: string, fileId: string): Promise<file | null> {
    return this.prisma.file.findFirst({
      where: {
        id: fileId,
        fact_resource: {
          some: {
            fact_id: factId
          }
        }
      }
    });
  }
}
//   async getPresignedURL(
//     bucketName: string,
//     fileName: string,
//     expiry: number = 60 * 60 * 24
//   ): Promise<string> {
//     return this.minioClient.presignedGetObject(bucketName, fileName, expiry);
//   }
