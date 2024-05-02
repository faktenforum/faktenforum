import { Controller, Inject } from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import { Get, Returns } from "@tsed/schema";
import { NotFound } from "@tsed/exceptions";
import { Next, Res } from "@tsed/common";
import { FileService, HasuraService } from "~/services";

@Controller("/files")
export class ClaimsController {
  @Inject()
  fileService: FileService;

  @Inject()
  hasuraService: HasuraService;

  @Get("/claims/:claimId/files/:fileId")
  @Returns(200, String).ContentType("*/*").Description("File content") // S
  async getClaimFile(
    @PathParams("claimId") claimId: string,
    @PathParams("fileId") fileId: string,
    @Res() response: Response & { set: (object: unknown) => void },
    @Next() next: (error: unknown) => void
  ) {
    try {
      const fileMetaData = await this.fileService.getClaimFileMetaData(claimId, fileId);
      if (!fileMetaData) {
        throw new NotFound("ClaimFile not found");
      }
      const stream = await this.fileService.getFileStream(fileMetaData.key);
      response.set({
        "Content-Type": fileMetaData.mime_type // or the appropriate MIME type
        // "Content-Disposition": `attachment; filename="${claimFile.name}"` // if you want it to be downloaded
      });

      stream.pipe(response as never); //pipe the file to the response
    } catch (error) {
      next(error); // Pass errors to Express.
    }
  }

  @Get("/facts/:factId/files/:fileId")
  @Returns(200, String).ContentType("*/*").Description("File content") // S
  async getFactFileMetaData(
    @PathParams("factId") factId: string,
    @PathParams("fileId") fileId: string,
    @Res() response: Response & { set: (object: unknown) => void },
    @Next() next: (error: unknown) => void
  ) {
    try {
      const fileMetaData = await this.fileService.getClaimFileMetaData(factId, fileId);
      if (!fileMetaData) {
        throw new NotFound("FactFile not found");
      }
      const stream = await this.fileService.getFileStream(fileMetaData.key);
      response.set({
        "Content-Type": fileMetaData.mime_type // or the appropriate MIME type
        // "Content-Disposition": `attachment; filename="${claimFile.name}"` // if you want it to be downloaded
      });

      stream.pipe(response as never); //pipe the file to the response
    } catch (error) {
      next(error); // Pass errors to Express.
    }
  }

  @Get("/files/:fileId")
  @Returns(200, String).ContentType("*/*").Description("File content") // S
  async getFile(
    @PathParams("fileId") fileId: string,
    @Req() request: Request
    @Res() response: Response & { set: (object: unknown) => void },
    @Next() next: (error: unknown) => void
  ) {
    try {

      const fileMetaData = await this.hasuraService.clientRequest
      const stream = await this.fileService.getFileStream(fileMetaData.key);
      response.set({
        "Content-Type": fileMetaData.mime_type // or the appropriate MIME type
        // "Content-Disposition": `attachment; filename="${claimFile.name}"` // if you want it to be downloaded
      });

      stream.pipe(response as never); //pipe the file to the response
    } catch (error) {
      next(error); // Pass errors to Express.
    }
  }
}
