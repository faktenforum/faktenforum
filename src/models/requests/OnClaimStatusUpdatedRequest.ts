import { Property, Required, Enum, Optional } from "@tsed/schema";
import { ClaimStatus, HasuraOperations } from "~/utils/consts";

type ClaimStatusUpdate = {
  status: ClaimStatus; // Assuming status is a string, adjust the type if necessary
  internal: boolean;
  short_id: string;
  [key: string]: unknown; // Allow other fields
};

export class OnClaimStatusUpdatedRequest {
  @Required()
  @Property()
  @Enum(HasuraOperations)
  op: HasuraOperations;

  @Optional()
  @Property()
  old?: ClaimStatusUpdate | null; // Ensure null is explicitly allowed

  @Optional()
  @Required()
  new?: ClaimStatusUpdate | null; // Use the new type here
}
