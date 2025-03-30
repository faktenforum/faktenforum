import { Controller, Inject } from "@tsed/di";
import { Logger } from "@tsed/common";
import { BodyParams } from "@tsed/platform-params";
import { Delete, Returns, Tags } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { DeleteFileRequest } from "~/models";
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

  @Delete("/delete-derivatives")
  @Tags("Files")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, Object).Description("Successfully deleted the file").ContentType("application/json")) // prettier-ignore
  async deleteFile(@BodyParams() body: DeleteFileRequest) {
    this.fileService.deleteFile(body.id);
    if (body.mimeType.startsWith("image/")) {
      this.imageService.deleteImageVersions(body.id);
    }
    return {}; // Returning an empty object with a 200 status code
  }
}
