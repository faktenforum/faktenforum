import { Controller, Inject } from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import { QueryParams } from "@tsed/platform-params";
import { Get, Returns } from "@tsed/schema";
import { AccessControlDecorator } from "~/decorators";
import { ClaimQueryParams, ClaimWithResources, Pagination } from "~/models";
import { ClaimService } from "~/services";

@Controller("/claims")
export class ClaimsController {
  @Inject()
  claimService: ClaimService;

  // @AccessControlDecorator({ role: "ADMIN" })
  @Get()
  @Returns(200, Pagination).Of(ClaimWithResources)
  async getClaims(@QueryParams() params: ClaimQueryParams) {
    const claims = await this.claimService.getClaims(params);
    return claims;
  }
  @AccessControlDecorator({ role: "ADMIN" })
  @Get("/:id")
  @Returns(200, ClaimWithResources)
  async getClaim(@PathParams("id") id: string) {
    const claim = await this.claimService.getClaimById(id);
    return claim;
  }
}
