import { Controller, Inject } from "@tsed/di";
import { NotFound } from "@tsed/exceptions";
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
  async submitClaim(@BodyParams() body: ClaimCreateDTO) {
    console.log("submit claim body", body);
    const { claimId, token } = await this.submissionService.submitClaim(body);
    return { token };
  }

  @Get("/:token")
  @Returns(200, ClaimDTO)
  async getSubmission(@PathParams("token") token: string) {
    const id = await this.submissionService.getClaimIdByToken(token);
    const claim = await this.claimService.getClaimById(id);
    console.log("claim", claim);
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
