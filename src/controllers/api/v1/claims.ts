import { Controller, Inject } from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import { QueryParams } from "@tsed/platform-params";
import { Get } from "@tsed/schema";
import { AccessControlDecorator } from "~/decorators";
import { ClaimQueryParams } from "~/models";
import { ClaimService } from "~/services";

@Controller("/claims")
export class ClaimsController {
  @Inject()
  claimService: ClaimService;

  // @AccessControlDecorator({ role: "ADMIN" })
  @Get()
  async getClaims(@QueryParams() params: ClaimQueryParams) {
    const claims = await this.claimService.getClaims(params);
    return claims;
  }
  @AccessControlDecorator({ role: "ADMIN" })
  @Get("/:id")
  async getClaim(@PathParams("id") id: string) {
    const claim = await this.claimService.getClaimById(id);
    return claim;
  }
}
