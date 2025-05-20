import { MultipartFile } from "@tsed/common";
import { Controller, Inject } from "@tsed/di";
import { BadRequest } from "@tsed/exceptions";
import { BodyParams } from "@tsed/platform-params";
import { Consumes, Post, Returns, getJsonSchema, Tags, Description } from "@tsed/schema";
import Ajv from "ajv";
import type { S3MulterFile } from "~/config/minio";
import { SubmissionRequest } from "~/models";
import { SubmissionCreateResponse } from "~/models";
import { EnvService, FileService, HasuraService, ImageService } from "~/services";

import { InsertClaimDocument } from "~/generated/graphql";
import type {
  InsertClaimMutation,
  InsertClaimMutationVariables,
  OriginInsertInput
} from "~/generated/graphql";
const ajv = new Ajv();
const SubmissionDtoJsonSchema = getJsonSchema(SubmissionRequest);
@Controller("/submission")
export class SubmissionController {
  @Inject()
  envService: EnvService;

  @Inject()
  fileService: FileService;

  @Inject()
  imageService: ImageService;

  @Inject(HasuraService)
  hasuraService: HasuraService;

  @Post()
  @Consumes("multipart/form-data")
  @Returns(200, SubmissionCreateResponse)
  @Tags("Submission")
  @Description("Endpoint to submit a claim from outside the platform")
  async submitClaim(
    @BodyParams() body: { payload: string },
    @MultipartFile("files", 10) files: S3MulterFile[]
  ) {
    const claim: SubmissionRequest = JSON.parse(body.payload);
    const isValid = ajv.validate(SubmissionDtoJsonSchema, claim);

    if (!isValid) {
      throw new BadRequest("Validation failed!");
    }
    const origins: OriginInsertInput[] = claim.origins.map((origin) => {
      const fileIndex = origin.fileIndex;
      const file =
        typeof fileIndex !== "undefined"
          ? {
              data: {
                id: files[fileIndex].key,
                mimeType: files[fileIndex].mimetype,
                name: files[fileIndex].originalname,
                size: files[fileIndex].size,
                eTag: files[fileIndex].etag.replace(/"/g, "") // minio uses md5 as etag
              }
            }
          : undefined;
      if (files && files[fileIndex] && files[fileIndex].mimetype.startsWith("image/")) {
        // Resize and upload the image
        this.imageService.resizeAndUpload(files[fileIndex].key);
      }

      return {
        url: origin.url,
        file
      };
    });
    try {
      await this.hasuraService.adminRequest<InsertClaimMutation, InsertClaimMutationVariables>(
        InsertClaimDocument,
        { origins, submitterNotes: claim.notes }
      );
    } catch (error) {
      files.forEach((file) => {
        this.fileService.deleteFileAndVersions(file.key, file.mimetype);
      });
      console.log(error);
    }
  }
}
