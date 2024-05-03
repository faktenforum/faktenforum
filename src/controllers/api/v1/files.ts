import { Controller, Inject } from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import { Get, Returns } from "@tsed/schema";
import { NotFound } from "@tsed/exceptions";
import { Next, Req, Res } from "@tsed/common";
import { FileService, HasuraService } from "~/services";
import { GetFileByIdDocument } from "~/generated/graphql";
import type { GetFileByIdQuery, GetFileByIdQueryVariables } from "~/generated/graphql";
@Controller("/files")
export class ClaimsController {
  @Inject()
  fileService: FileService;

  @Inject()
  hasuraService: HasuraService;

  @Get("/files/:fileId")
  @Returns(200, String).ContentType("*/*").Description("File content")
  @Returns(400, String).Description("Bad request. The request or parameters are incorrect.")
  @Returns(401, String).Description("Unauthorized. Authentication credentials are missing or invalid.")
  @Returns(404, String).Description("File not found. The requested file does not exist.")
  @Returns(500, String).Description("Internal server error. An unexpected error occurred.")
  async getFile(
    @PathParams("fileId") fileId: string,
    @Req() request: Request,
    @Res() response: Response & { set: (object: unknown) => void },
    @Next() next: (error: unknown) => void
  ) {
    try {
      const { file: fileMetaData } = await this.hasuraService.clientRequest<
        GetFileByIdQuery,
        GetFileByIdQueryVariables
      >(GetFileByIdDocument, { id: fileId }, request.headers);
      if (!fileMetaData) {
        throw new NotFound("File not found");
      }
      const stream = await this.fileService.getFileStream(fileMetaData?.key || "");
      response.set({
        "Content-Type": fileMetaData?.mimeType,
        "Content-Disposition": `filename=${fileMetaData?.name}`,
        "Content-Length": fileMetaData?.size,
        "Last-Modified": fileMetaData?.updatedAt,
        ETag: fileMetaData?.id
      });

      stream.pipe(response as never);
    } catch (error) {
      next(error);
    }
  }
}
