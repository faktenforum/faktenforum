import { Controller, Inject } from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import { Consumes, Description, Get, Post, Returns } from "@tsed/schema";
import { NotFound } from "@tsed/exceptions";
import { MultipartFile, Next, Req, Res } from "@tsed/common";
import { FileService, HasuraService } from "~/services";
import { GetFileByIdDocument, InsertFileDocument } from "~/generated/graphql";
import { isUUID } from "class-validator";
import type { Session } from "~/models";
import type {
  GetFileByIdQuery,
  GetFileByIdQueryVariables,
  InsertFileMutation,
  InsertFileMutationVariables
} from "~/generated/graphql";
import { S3MulterFile } from "~/config/minio";
import { FileUploadResponse } from "~/models/responses/FileUploadResponse";

@Controller("/files")
export class ClaimsController {
  @Inject()
  fileService: FileService;

  @Inject()
  hasuraService: HasuraService;

  @Get("/:fileId")
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
      if (!isUUID(fileId)) {
        throw new NotFound("File not found");
      }
      const { file: fileMetaData } = await this.hasuraService.clientRequest<
        GetFileByIdQuery,
        GetFileByIdQueryVariables
      >(GetFileByIdDocument, { id: fileId }, request.headers);
      if (!fileMetaData) {
        throw new NotFound("File not found");
      }
      const stream = await this.fileService.getFileStream(fileMetaData?.id || "");
      response.set({
        "Content-Type": fileMetaData?.mimeType,
        "Content-Disposition": `filename=${fileMetaData?.name}`,
        "Content-Length": fileMetaData?.size,
        "Last-Modified": fileMetaData?.updatedAt,
        ETag: fileMetaData?.eTag
      });

      stream.pipe(response as never);
    } catch (error) {
      next(error);
    }
  }

  @Post("/")
  @Description("This endpoint allows for uploading a file to the server.")
  @Returns(200, FileUploadResponse).Description("Returns the ID of the uploaded file")
  @Consumes("multipart/form-data")
  async uploadFile(@MultipartFile("file") file: S3MulterFile, @Req() request: Request & { user: Session }) {
    try {
      const { insertFileOne } = await this.hasuraService.adminRequest<
        InsertFileMutation,
        InsertFileMutationVariables
      >(InsertFileDocument, {
        id: file.key,
        mimeType: file.mimetype,
        name: file.originalname,
        size: file.size,
        eTag: file.etag, // minio uses md5 as etag
        createdBy: request.user.userId
      });

      return { id: insertFileOne?.id };
    } catch (error) {
      this.fileService.deleteFile(file.key);
      throw error;
    }
  }
}
