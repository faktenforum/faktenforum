import { Property, Required, Enum } from "@tsed/schema";

export enum ClaimWorthinessCategory {
  CHECKWORTHY = "checkworthy-claim",
  NON_CLAIM = "non-claim",
  NON_CHECKWORTHY = "non-checkworthy-claim"
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
