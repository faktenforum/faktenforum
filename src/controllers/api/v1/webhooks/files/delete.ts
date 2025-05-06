import { Controller, Inject } from "@tsed/di";
import { Logger } from "@tsed/common";
import { BodyParams } from "@tsed/platform-params";
import { Delete, Returns, Tags } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { DeleteFileRequest, RequestSuccessResponse } from "~/models";
import { FileService, EnvService, ImageService, MatrixService } from "~/services";

@Controller("/webhooks/files/")
export class FilesWebHookController {
  @Inject(FileService)
  fileService: FileService;

  @Inject(ImageService)
  imageService: ImageService;

  @Inject(EnvService)
  envService: EnvService;

  @Inject(MatrixService)
  matrixService: MatrixService;

  @Inject(Logger)
  logger: Logger;

  @Delete("/delete")
  @Tags("Files")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, RequestSuccessResponse).Description("Successfully deleted the file").ContentType("application/json")) // prettier-ignore
  async deleteFile(@BodyParams() body: DeleteFileRequest) {
    await this.fileService.deleteFileAndVersions(body.id, body.mimeType);
    return {
      success: true
    }; // Returning an empty object with a 200 status code
  }
}
