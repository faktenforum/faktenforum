import sharp from "sharp";
import { Injectable, Inject } from "@tsed/di";
import { FileService } from "~/services"; // Adjust the path as per your project structure
import { SIZES, TO_FORMAT } from "~/utils/consts"; // Adjust the path as per your project structure

@Injectable()
export class ImageService {
  @Inject()
  fileService: FileService;

  async resizeAndUpload(fileKey: string, mimetype: string): Promise<void> {
    // Get the original file as a stream from Minio
    const originalFileStream = await this.fileService.getFileStream(fileKey);

    // Create the initial Sharp pipeline
    const pipeline = sharp();

    // Pipe the original stream into the Sharp pipeline
    originalFileStream.pipe(pipeline);

    // Process and upload each size
    await Promise.all(SIZES.map((size) => this.resizeAndUploadSingleSize(pipeline.clone(), size, fileKey)));
  }

  private async resizeAndUploadSingleSize(
    pipeline: sharp.Sharp,
    size: { key: string; width: number },
    fileKey: string
  ): Promise<void> {
    // Apply transformations
    console.log(`Resizing image to ${size.width} for key ${fileKey}`);
    const transformedStream = pipeline
      .resize(size.width)
      .toFormat(TO_FORMAT)
      .on("error", (err) => {
        console.error(`Error processing image for size ${size.key}:`, err);
      });

    // Key for the resized file
    const resizedFileKey = `${fileKey}-${size.key}`;

    // Upload the transformed stream to Minio
    this.fileService.saveFile(resizedFileKey, transformedStream, {
      "Content-Type": `image/${TO_FORMAT}`
    });
  }
}
