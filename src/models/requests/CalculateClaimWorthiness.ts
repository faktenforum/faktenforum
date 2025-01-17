import { Property, Required, Enum } from "@tsed/schema";
import { IsUUID } from "class-validator";

export enum ClaimWorthinessCategory {
  CHECKWORTHY = "checkworthy-claim",
  NON_CLAIM = "non-claim",
  NON_CHECKWORTHY = "non-checkworthy-claim"
}

export class ClaimWorthinessRequest {
  @Property()
  @Required()
  text: string;
}

export class ClaimWorthinessResponse {
  @Property()
  @Required()
  @Enum(ClaimWorthinessCategory)
  category: ClaimWorthinessCategory;

  @Property()
  @Required()
  confidence: number;
}

export class CalculateClaimWorthinessRequest {
  @Property()
  @Required()
  @IsUUID()
  claimId: string;
}
