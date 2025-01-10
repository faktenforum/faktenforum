import { Controller, Inject } from "@tsed/di";
import { PathParams, BodyParams } from "@tsed/platform-params";
import { Consumes, Description, Get, Post, Returns, getJsonSchema } from "@tsed/schema";
import { NotFound, Unauthorized, Forbidden } from "@tsed/exceptions";
import { MultipartFile, Next, Req, Res } from "@tsed/common";
import { FileService, HasuraService, ImageService } from "~/services";
import Ajv from "ajv";

import {
  GetFileByIdDocument,
  GetUserByUsernameDocument,
  InsertFileAndUpdateUserProfileImageDocument,
  InsertFileAndUpdateOriginFileDocument,
  InsertFileAndUpdateSourceFileDocument,
  InsertFileAndInsertOriginDocument,
  InsertFileAndInsertSourceDocument
} from "~/generated/graphql";
import { isUUID } from "class-validator";
import type { Session } from "~/models";
import type {
  GetFileByIdQuery,
  GetFileByIdQueryVariables,
  GetUserByUsernameQuery,
  GetUserByUsernameQueryVariables,
  InsertFileAndUpdateOriginFileMutation,
  InsertFileAndUpdateOriginFileMutationVariables,
  InsertFileAndUpdateSourceFileMutation,
  InsertFileAndUpdateSourceFileMutationVariables,
  InsertFileAndInsertSourceMutation,
  InsertFileAndInsertSourceMutationVariables,
  InsertFileAndInsertOriginMutation,
  InsertFileAndInsertOriginMutationVariables,
  InsertFileAndUpdateUserProfileImageMutation,
  InsertFileAndUpdateUserProfileImageMutationVariables
} from "~/generated/graphql";
import type { S3MulterFile } from "~/config/minio";
import { FileUploadResponse, FileUploadFormData, OrginSourceData } from "~/models";
import { AccessControlDecorator } from "~/decorators";
import { BadRequest } from "@tsed/exceptions";

const ajv = new Ajv();
const OriginSourceDataJsonSchema = getJsonSchema(OrginSourceData);
@Controller("/files")
export class ClaimsController {
  @Inject()
  fileService: FileService;

  @Inject()
  hasuraService: HasuraService;

  @Inject()
  imageService: ImageService;

  @Get("/avatar/:username")
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
  async getAvatar(
    @PathParams("username") username: string,
    @Req() request: Request,
    @Res() response: Response & { set: (object: unknown) => void },
    @Next() next: (error: unknown) => void
  ) {
    try {
      // This is also checks if user has access to this file
      const queryResponse = await this.hasuraService.adminRequest<
        GetUserByUsernameQuery,
        GetUserByUsernameQueryVariables
      >(GetUserByUsernameDocument, { username });
      const user = queryResponse.user[0];
      if (!user) {
        throw new NotFound("Avatar not found");
      }
      const { profileImage, id: userId } = user;
      const fileId = profileImage ?? userId;
      const { file: fileMetaData } = await this.hasuraService.adminRequest<
        GetFileByIdQuery,
        GetFileByIdQueryVariables
      >(GetFileByIdDocument, { id: fileId });
      if (!fileMetaData) {
        throw new NotFound("File not found");
      }

      const metaData = await this.fileService.getFileMetaData(fileMetaData.id);
      const fileSized = fileMetaData.mimeType === "image/svg+xml" ? fileId : `${fileId}-sm`;
      const stream = await this.fileService.getFileStream(fileSized);
      response.set({
        "Content-Type": fileMetaData.mimeType,
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

      const fileSized = fileMetaData.mimeType === "image/svg+xml" ? fileId : `${fileId}-${size}`;

      const metaData = await this.fileService.getFileMetaData(fileSized);
      const stream = await this.fileService.getFileStream(fileSized);
      console.log(metaData.metaData["content-type"]);
      response.set({
        "Content-Type": metaData.metaData["content-type"],
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
        eTag: file.etag.replace('"', ""), // minio uses md5 as etag
        entryId: body.id
      };
      let tableData;
      if (body.tableData) {
        tableData = JSON.parse(body.tableData);
      } else {
        tableData = null; // or handle the case as needed
      }
      if (tableData && !ajv.validate(OriginSourceDataJsonSchema, tableData)) {
        throw new BadRequest("TableData validation failed!");
      }
      switch (body.table) {
        case "user": {
          if (request.user.userId !== vars.entryId) {
            throw new Unauthorized("Unauthorized");
          }
          const { insertFileOne, updateUserByPk } = await this.hasuraService.adminRequest<
            InsertFileAndUpdateUserProfileImageMutation,
            InsertFileAndUpdateUserProfileImageMutationVariables
          >(InsertFileAndUpdateUserProfileImageDocument, vars);
          if (!updateUserByPk?.id) {
            throw new Forbidden("Access to user denied");
          }
          response = { fileId: insertFileOne?.id, entryId: vars.entryId };
          break;
        }
        case "source": {
          if (!body.tableData) {
            const { insertFileOne, updateSourceByPk } = await this.hasuraService.clientRequest<
              InsertFileAndUpdateSourceFileMutation,
              InsertFileAndUpdateSourceFileMutationVariables
            >(InsertFileAndUpdateSourceFileDocument, vars, request.headers);
            if (!updateSourceByPk?.id) {
              throw new Forbidden("Access to claim denied");
            }
            response = { fileId: insertFileOne?.id, entryId: vars.entryId };
            break;
          } else {
            delete tableData.claimId; // claimId is maybe send by the client but not used at the moment
            const { insertFileOne, insertSourceOne } = await this.hasuraService.clientRequest<
              InsertFileAndInsertSourceMutation,
              InsertFileAndInsertSourceMutationVariables
            >(InsertFileAndInsertSourceDocument, { ...vars, ...tableData }, request.headers);
            if (!insertSourceOne?.id) {
              throw new Forbidden("Failed to insert source");
            }
            response = { fileId: insertFileOne?.id, entryId: insertSourceOne?.id };
            break;
          }
        }
        case "origin": {
          if (!body.tableData) {
            const { insertFileOne, updateOriginByPk } = await this.hasuraService.clientRequest<
              InsertFileAndUpdateOriginFileMutation,
              InsertFileAndUpdateOriginFileMutationVariables
            >(InsertFileAndUpdateOriginFileDocument, vars, request.headers);
            if (!updateOriginByPk?.id) {
              throw new Forbidden("Access to origin denied");
            }
            response = { fileId: insertFileOne?.id, entryId: vars.entryId };
            break;
          } else {
            delete tableData.factId;
            const { insertFileOne, insertOriginOne } = await this.hasuraService.clientRequest<
              InsertFileAndInsertOriginMutation,
              InsertFileAndInsertOriginMutationVariables
            >(InsertFileAndInsertOriginDocument, { ...vars, ...tableData }, request.headers);
            response = { fileId: insertFileOne?.id, entryId: insertOriginOne?.id };
            if (!insertOriginOne?.id) {
              throw new Forbidden("Failed to insert Origin");
            }
            break;
          }
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
