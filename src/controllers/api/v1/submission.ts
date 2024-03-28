import { MultipartFile, Next, Res } from "@tsed/common";
import { Controller, Inject } from "@tsed/di";
import { BadRequest, NotFound } from "@tsed/exceptions";
import { BodyParams, PathParams } from "@tsed/platform-params";
import { Get, Post, Put, Returns, getJsonSchema } from "@tsed/schema";
import Ajv from "ajv";
import { NextFunction, Response } from "express";
import { S3MulterFile } from "~/config/minio";
import { SubmissionCreate, Submission } from "~/models";
import { SubmissionCreateResponse } from "~/models";
import { ClaimService, EnvService, FileService, SubmissionService } from "~/services";

const ajv = new Ajv();
const SubmissionCreateDtoJsonSchema = getJsonSchema(SubmissionCreate);
@Controller("/submission")
export class SubmissionController {
  @Inject()
  envService: EnvService;
  @Inject()
  submissionService: SubmissionService;

  @Inject()
  claimService: ClaimService;

  @Inject()
  fileService: FileService;

  private createClaimFileUrl(token: string, fileId: string) {
    return `${this.envService.baseUrl}/api/v1/submission/${token}/files/${fileId}`;
  }

  @Post()
  @Returns(200, SubmissionCreateResponse)
  async submitClaim(
    @BodyParams() body: { payload: string },
    @MultipartFile("files", 100) files: S3MulterFile[]
  ) {
    const claim: SubmissionCreate = JSON.parse(body.payload);
    console.log(body.payload);
    const isValid = ajv.validate(SubmissionCreateDtoJsonSchema, claim);

    if (!isValid) {
      throw new BadRequest("Validation failed!");
    }

    const { token } = await this.submissionService.submitClaim(claim, files);
    return { token };
  }

  @Get("/:token")
  @Returns(200, Submission)
  async getSubmission(@PathParams("token") token: string) {
    const id = await this.submissionService.getClaimIdByToken(token);
    const claim = await this.claimService.getClaimById(id);
    if (!claim) {
      throw new NotFound("Claim not found");
    }
    console.log("Claim", JSON.stringify(claim, null, 2));
    const response = {
      title: claim.title,
      description: claim.description,
      resources: claim.resources.map((resource) => ({
        id: resource.id,
        originalUrl: resource.originalUrl,
        file: resource.file
          ? {
              id: resource.file.id,
              name: resource.file.name,
              size: resource.file.size,
              mimeType: resource.file.mimeType,
              url: this.createClaimFileUrl(token, resource.file.id)
            }
          : null
      }))
    };
    return response;
  }

  @Get("/:token/files/:fileId")
  @Returns(200, String).ContentType("*/*").Description("File content") // S
  async getSubmissionFile(
    @PathParams("token") token: string,
    @PathParams("fileId") fileId: string,
    @Res() response: Response & { set: (object: Record<string, string>) => void },
    @Next() next: NextFunction
  ) {
    try {
      const id = await this.submissionService.getClaimIdByToken(token);
      const claimFile = await this.fileService.getClaimFileMetaData(id, fileId);
      if (!claimFile) {
        throw new NotFound("ClaimFile not found");
      }
      const stream = await this.fileService.getFileStream(claimFile.key);
      response.set({
        "Content-Type": claimFile.mimeType // or the appropriate MIME type
        // "Content-Disposition": `attachment; filename="${claimFile.name}"` // if you want it to be downloaded
      });

      stream.pipe(response); //pipe the file to the response
    } catch (error) {
      next(error); // Pass errors to Express.
    }
  }

  @Put("/:token")
  @Returns(200, Submission)
  async updateSubmission(
    @PathParams("token") token: string,
    @BodyParams() body: { payload: string },
    @MultipartFile("files", 100) files: S3MulterFile[]
  ) {
    const claim: SubmissionCreate = JSON.parse(body.payload);

    const isValid = ajv.validate(SubmissionCreateDtoJsonSchema, claim);

    if (!isValid) {
      throw new BadRequest("Validation failed!");
    }
    const id = await this.submissionService.getClaimIdByToken(token);
    if (!id) {
      throw new NotFound("Claim not found by token");
    }
    const response = await this.submissionService.updateSubmissionById(id, claim, files);
    await this.submissionService.endSubmission(token);
    return response;
  }
}
