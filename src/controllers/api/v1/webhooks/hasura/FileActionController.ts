import { Controller, Inject } from "@tsed/di";

import { Logger } from "@tsed/common";
import { BodyParams } from "@tsed/platform-params";
import { Delete, Returns } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { DeleteFileRequest } from "~/models";

import { FileService, ImageService } from "~/services";

@Controller("/webhooks")
export class FileActionController {
  @Inject(FileService)
  fileService: FileService;

  @Inject(ImageService)
  imageService: ImageService;

  @Inject(Logger)
  logger: Logger;

  @Delete("/delete-file")
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
