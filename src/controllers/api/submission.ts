import { MultipartFile, PlatformMulterFile } from "@tsed/common";
import { Controller, Inject } from "@tsed/di";
import { BadRequest, NotFound } from "@tsed/exceptions";
import { BodyParams, PathParams } from "@tsed/platform-params";
import { Get, Post, Put, Returns, string } from "@tsed/schema";

import prisma from "src";
import { AccessControlDecorator } from "~/decorators";
import { ClaimCreateDTO, ClaimDTO } from "~/models";
import { SubmissionResponse } from "~/models/Submission";
import { ClaimService, SubmissionService } from "~/services";

@Controller("/submission")
export class SubmissionController {
  @Inject()
  submissionService: SubmissionService;

  @Inject()
  claimService: ClaimService;

  @Post()
  @Returns(200, SubmissionResponse)
  async submitClaim(
    @BodyParams() body: { payload: string },
    @MultipartFile("files", 100) files: PlatformMulterFile[]
  ) {
    const payload = plainToClass(ClaimCreateDTO, JSON.parse(body.payload));
    const errors = await validate(payload);
    console.log('errors',errors);
    if (errors.length > 0) {
      throw new BadRequest("Validation failed!");
    }
    console.log("payload", payload);
    console.log("files", files);
    // const { claimId, token } = await this.submissionService.submitClaim(body);
    // return { token };
    throw new NotFound("assdf");
    return { token: "ysdsfsf" };
  }

  @Get("/:token")
  @Returns(200, ClaimDTO)
  async getSubmission(@PathParams("token") token: string) {
    const id = await this.submissionService.getClaimIdByToken(token);
    const claim = await this.claimService.getClaimById(id);
    if (!claim) {
      throw new NotFound("Claim not found");
    }
    return claim;
  }

  @Put("/:token")
  @Returns(200, ClaimDTO)
  async updateSubmission(@PathParams("token") token: string, @BodyParams() body: ClaimCreateDTO) {
    const id = await this.submissionService.getClaimIdByToken(token);
    const claim = await this.claimService.updateClaimById(id, body);

    if (!claim) {
      throw new NotFound("Claim not found");
    }
    return claim;
  }
}
