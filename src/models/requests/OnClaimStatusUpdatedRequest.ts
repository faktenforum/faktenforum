import { Property, Required, Enum } from "@tsed/schema";
import { ClaimStatus, HasuraOperations } from "~/utils/consts";

export class OnClaimStatusUpdatedRequest {
  @Required()
  @Property()
  @Enum(Object.keys(HasuraOperations))
  op: HasuraOperations;

  @Required()
  @Property()
  claim_short_id: string;

  @Required()
  @Property()
  @Enum(Object.keys(ClaimStatus))
  claim_status: ClaimStatus;

  @Property()
  @Required()
  claim_internal: boolean;
}
