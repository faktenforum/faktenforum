import { MultipartFile, Next, Req, Res } from "@tsed/common";
import { Controller, Inject } from "@tsed/di";
import { BadRequest, NotFound } from "@tsed/exceptions";
import { BodyParams, PathParams } from "@tsed/platform-params";
import { Get, Post, Put, Returns, getJsonSchema, string } from "@tsed/schema";
import Ajv from "ajv";
import prisma from "src";
import { S3MulterFile } from "~/config/minio";
import { AccessControlDecorator } from "~/decorators";
import { ClaimCreateDTO, ClaimDTO, PassportUser } from "~/models";
import { SubmissionResponse } from "~/models/Submission";
import { ClaimService, EnvService, FileService, SubmissionService } from "~/services";

const ajv = new Ajv();
const ClaimCreateDtoJsonSchema = getJsonSchema(ClaimCreateDTO);
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
    return `${this.envService.hostUrl}/api/submission/${token}/files/${fileId}`;
  }

  @Post()
  @Returns(200, SubmissionResponse)
  async submitClaim(
    @BodyParams() body: { payload: string },
    @MultipartFile("files", 100) files: S3MulterFile[]
  ) {
    const claim: ClaimCreateDTO = JSON.parse(body.payload);
    const isValid = ajv.validate(ClaimCreateDtoJsonSchema, claim);

    if (!isValid) {
      throw new BadRequest("Validation failed!");
    }

    const { claimId, token } = await this.submissionService.submitClaim(claim, files);
    return { token };
  }

  @Get("/:token")
  @Returns(200, ClaimDTO)
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
        files: resource.files.map((file) => ({
          id: file.id,
          name: file.name,
          size: file.size,
          mimeType: file.mimeType,
          url: this.createClaimFileUrl(token, file.id)
        }))
      }))
    };
    console.log("response", JSON.stringify(response));
    return response;
  }

  @Get("/:token/files/:fileId")
  @Returns(200, String).ContentType("*/*").Description("File content") // S
  async getSubmissionFile(
    @PathParams("token") token: string,
    @PathParams("fileId") fileId: string,
    @Res() response: Response & { set: (object: any) => void },
    @Next() next: (error: any) => void
  ) {
    try {
      const id = await this.submissionService.getClaimIdByToken(token);
      const claimFile = await this.claimService.getClaimFileByIds(id, fileId);
      if (!claimFile) {
        throw new NotFound("ClaimFile not found");
      }
      const stream = await this.fileService.getFileStream(claimFile.key);
      response.set({
        "Content-Type": claimFile.mimeType // or the appropriate MIME type
        // "Content-Disposition": `attachment; filename="${claimFile.name}"` // if you want it to be downloaded
      });

      stream.pipe(response as any); //pipe the file to the response
    } catch (error) {
      next(error); // Pass errors to Express.
    }
  }

  @Put("/:token")
  @Returns(200, ClaimDTO)
  async updateSubmission(
    @PathParams("token") token: string,
    @BodyParams() body: { payload: string },
    @MultipartFile("files", 100) files: S3MulterFile[]
  ) {
    const claim: ClaimCreateDTO = JSON.parse(body.payload);

    const isValid = ajv.validate(ClaimCreateDtoJsonSchema, claim);

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