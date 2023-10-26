import { Injectable } from "@tsed/di";
import Minio from "minio";

@Injectable()
export class FileService {
  private minioClient: Minio.Client;

  constructor() {
    // this.minioClient = new Minio.Client({
    //   endPoint: "YOUR_MINIO_ENDPOINT",
    //   port: "YOUR_MINIO_PORT",
    //   useSSL: true, // or false, depending on your Minio setup
    //   accessKey: "YOUR_ACCESS_KEY",
    //   secretKey: "YOUR_SECRET_KEY"
    // });
  }

  //   async storeFile(bucketName: string, fileName: string, fileContent: Buffer | ReadableStream, metaData: any) {
  //     await this.minioClient.putObject(bucketName, fileName, fileContent, metaData);
  //   }

  //   getFile(bucketName: string, fileName: string): Promise<ReadableStream> {
  //     //return this.minioClient.fGetObject(bucketName, fileName);
  //   }

  //   async getPresignedURL(
  //     bucketName: string,
  //     fileName: string,
  //     expiry: number = 60 * 60 * 24
  //   ): Promise<string> {
  //     return this.minioClient.presignedGetObject(bucketName, fileName, expiry);
  //   }
}
