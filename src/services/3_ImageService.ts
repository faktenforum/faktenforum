import sharp from "sharp";
import { Injectable, Inject } from "@tsed/di";
import { FileService } from "~/services"; // Adjust the path as per your project structure
import { SIZES, TO_FORMAT } from "~/utils/consts"; // Adjust the path as per your project structure

@Injectable()
export class ImageService {
  @Inject()
  fileService: FileService;

  async resizeAndUpload(fileKey: string): Promise<void> {
    // Get the original file as a stream from Minio
    const originalFileStream = await this.fileService.getFileStream(fileKey);

    // Create the initial Sharp pipeline
    const pipeline = sharp();

    // Pipe the original stream into the Sharp pipeline
    originalFileStream.pipe(pipeline);

    // Process and upload each size
    await Promise.all(SIZES.map((size) => this.resizeAndUploadSingleSize(pipeline.clone(), size, fileKey)));
  }

  async deleteImageVersions(fileKey: string) {
    return Promise.all([
      ...SIZES.map((size) => {
        return this.fileService.deleteFile(ImageService.generateKey(fileKey, size));
      })
    ]);
  }

  private async resizeAndUploadSingleSize(
    pipeline: sharp.Sharp,
    size: { key: string; width: number },
    fileKey: string
  ): Promise<void> {
    // Apply transformations
    const transformedStream = pipeline
      .resize(size.width)
      .toFormat(TO_FORMAT)
      .on("error", (err) => {
        console.error(`Error processing image for size ${size.key}:`, err);
      });

    // Upload the transformed stream to Minio
    await this.fileService.saveFile(ImageService.generateKey(fileKey, size), transformedStream, undefined, {
      "Content-Type": `image/${TO_FORMAT}`
    });
  }

  public static generateKey(fileKey: string, size: { key: string; width: number }): string {
    return `${fileKey}-${size.key}`;
  }
}
