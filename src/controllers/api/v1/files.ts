import { Controller, Inject } from "@tsed/di";
import { PathParams, BodyParams } from "@tsed/platform-params";
import { Consumes, Description, Get, Post, Returns } from "@tsed/schema";
import { NotFound } from "@tsed/exceptions";
import { MultipartFile, Next, Req, Res } from "@tsed/common";
import { FileService, HasuraService, ImageService } from "~/services";
import {
  GetFileByIdDocument,
  InsertFileAndUpdateUserProfileImageDocument,
  InsertFileAndUpdateOriginFileDocument,
  InsertFileAndUpdateSourceFileDocument
} from "~/generated/graphql";
import { isUUID } from "class-validator";
import type { Session } from "~/models";
import type {
  GetFileByIdQuery,
  GetFileByIdQueryVariables,
  InsertFileMutation,
  InsertFileMutationVariables,
  InsertFileAndUpdateOriginFileMutation,
  InsertFileAndUpdateOriginFileMutationVariables,
  InsertFileAndUpdateSourceFileMutation,
  InsertFileAndUpdateSourceFileMutationVariables
} from "~/generated/graphql";
import { S3MulterFile } from "~/config/minio";
import { FileUploadResponse, FileUploadFormData } from "~/models";
import { AccessControlDecorator } from "~/decorators";

import { BadRequest } from "@tsed/exceptions";

@Controller("/files")
export class ClaimsController {
  @Inject()
  fileService: FileService;

  @Inject()
  hasuraService: HasuraService;

  @Inject()
  imageService: ImageService;

  @Get("/:fileId")
  @AccessControlDecorator({})
  @(Returns(200, String).ContentType("*/*").Description("File content") // prettier-ignore
    ) // prettier-ignore
  @(Returns(400, String).Description("Bad request. The request or parameters are incorrect.") // prettier-ignore
    ) // prettier-ignore
  @(Returns(401, String).Description("Unauthorized. Authentication credentials are missing or invalid.") // prettier-ignore
    ) // prettier-ignore
  @(Returns(404, String).Description("File not found. The requested file does not exist.") // prettier-ignore
    ) // prettier-ignore
  @(Returns(500, String).Description("Internal server error. An unexpected error occurred.") // prettier-ignore
    ) // prettier-ignore
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
      // This is also checks if user has access to this file
      const { file: fileMetaData } = await this.hasuraService.clientRequest<
        GetFileByIdQuery,
        GetFileByIdQueryVariables
      >(GetFileByIdDocument, { id: fileId }, request.headers);
      if (!fileMetaData) {
        throw new NotFound("File not found");
      }
      const metaData = await this.fileService.getFileMetaData(fileMetaData.id);
      const stream = await this.fileService.getFileStream(fileMetaData?.id || "");
      response.set({
        "Content-Type": metaData?.metaData.contentType,
        "Content-Disposition": `filename=${fileMetaData.name}`,
        "Content-Length": metaData?.size,
        "Last-Modified": fileMetaData?.updatedAt,
        ETag: metaData?.etag
      });

      stream.pipe(response as never);
    } catch (error) {
      next(error);
    }
  }

  // route to get file by id and size, Size is in Bucket format xs sm md lg xl
  @Get("/:fileId/:size")
  @AccessControlDecorator({})
  @(Returns(200, String).ContentType("*/*").Description("File content")) // prettier-ignore
  @(Returns(400, String).Description("Bad request. The request or parameters are incorrect.")) // prettier-ignore
  @(Returns(401, String).Description("Unauthorized. Authentication credentials are missing or invalid.") // prettier-ignore
    ) // prettier-ignore
  @(Returns(404, String).Description("File not found. The requested file does not exist.") // prettier-ignore
    ) // prettier-ignore
  @(Returns(500, String).Description("Internal server error. An unexpected error occurred.") // prettier-ignore
    ) // prettier-ignore
  async getFileSized(
    @PathParams("fileId") fileId: string,
    @PathParams("size") size: string,
    @Req() request: Request,
    @Res() response: Response & { set: (object: unknown) => void },
    @Next() next: (error: unknown) => void
  ) {
    try {
      if (!isUUID(fileId)) {
        throw new NotFound("File not found");
      }
      // This is also checks if user has access to this file
      const { file: fileMetaData } = await this.hasuraService.clientRequest<
        GetFileByIdQuery,
        GetFileByIdQueryVariables
      >(GetFileByIdDocument, { id: fileId }, request.headers);
      if (!fileMetaData) {
        throw new NotFound("File not found");
      }
      const fileSized = `${fileId}-${size}`;
      const metaData = await this.fileService.getFileMetaData(fileSized);
      const stream = await this.fileService.getFileStream(fileSized);
      response.set({
        "Content-Type": metaData?.metaData.contentType,
        "Content-Disposition": `filename=${fileMetaData.name}`,
        "Content-Length": metaData?.size,
        "Last-Modified": fileMetaData?.updatedAt,
        ETag: metaData?.etag
      });

      stream.pipe(response as never);
    } catch (error) {
      next(error);
    }
  }

  @Post("/")
  @Description("This endpoint allows for uploading a file to the server.")
  @Consumes("multipart/form-data")
  @AccessControlDecorator({})
  @(Returns(200, FileUploadResponse).Description("Returns the ID of the uploaded file")) // prettier-ignore
  async uploadFile(
    @BodyParams() body: FileUploadFormData,
    @MultipartFile("file") file: S3MulterFile,
    @Req() request: Request & { user: Session }
  ) {
    try {
      let response;
      const vars = {
        fileId: file.key,
        mimeType: file.mimetype,
        name: file.originalname,
        size: file.size,
        eTag: file.etag, // minio uses md5 as etag
        entryId: body.id
      };
      switch (body.table) {
        case "user": {
          const { insertFileOne } = await this.hasuraService.clientRequest<
            InsertFileMutation,
            InsertFileMutationVariables
          >(InsertFileAndUpdateUserProfileImageDocument, vars, request.headers);

          response = { id: insertFileOne?.id };
          break;
        }
        case "source": {
          const { insertFileOne } = await this.hasuraService.clientRequest<
            InsertFileAndUpdateSourceFileMutation,
            InsertFileAndUpdateSourceFileMutationVariables
          >(InsertFileAndUpdateSourceFileDocument, vars, request.headers);
          response = { id: insertFileOne?.id };
          break;
        }
        case "origin": {
          const { insertFileOne } = await this.hasuraService.clientRequest<
            InsertFileAndUpdateOriginFileMutation,
            InsertFileAndUpdateOriginFileMutationVariables
          >(InsertFileAndUpdateOriginFileDocument, vars, request.headers);
          response = { id: insertFileOne?.id };
          break;
        }
        default:
          throw new BadRequest("Invalid table type");
      }
      if (file.mimetype.startsWith("image/")) {
        // Resize and upload the image
        this.imageService.resizeAndUpload(file.key);
      }
      return response;
    } catch (error) {
      this.fileService.deleteFile(file.key);
      throw error;
    }
  }
}
