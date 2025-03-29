import { Controller, Inject } from "@tsed/di";
import { Logger } from "@tsed/common";
import { BodyParams } from "@tsed/platform-params";
import { Post, Returns } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { CalculateClaimWorthinessRequest } from "~/models";

import { ClaimWorthinessService } from "~/services";

@Controller("/webhooks/hasura/checkworthiness")
export class HasuraCheckworthinessWebHookController {
  @Inject(ClaimWorthinessService)
  claimWorthinessService: ClaimWorthinessService;

  @Inject(Logger)
  logger: Logger;

  @Post("/calculate")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(204).ContentType("application/json")) // prettier-ignore
  async calculateCheckworthiness(@BodyParams() body: CalculateClaimWorthinessRequest): Promise<void> {
    this.logger.info(`[HasuraWebHookController] calculateCheckworthiness: ${JSON.stringify(body)}`);
    this.claimWorthinessService.inferClaimWorthiness(body.claimId);
    return;
  }

  @Post("/calculate-all-claims")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200).ContentType("application/json")) // prettier-ignore
  async calculateForAllClaims(): Promise<void> {
    this.logger.info(`[HasuraWebHookController] calculateForAllClaims`);
    this.claimWorthinessService.inferAllnewClaims();
    return;
  }
}
