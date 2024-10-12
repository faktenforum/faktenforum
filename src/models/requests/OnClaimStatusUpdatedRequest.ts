import { Property, Required, Enum, Optional, Nullable } from "@tsed/schema";
import { ClaimStatus, HasuraOperations } from "~/utils/consts";

type ClaimStatusUpdate = {
  status: ClaimStatus; // Assuming status is a string, adjust the type if necessary
  internal: boolean;
  short_id: string;
  [key: string]: unknown; // Allow other fields
};

@Enum(Object.keys(HasuraOperations))
export class OnClaimStatusUpdatedRequest {
  @Required()
  @Property()
  @Enum(Object.keys(HasuraOperations))
  op: HasuraOperations;

  @Optional()
  @Property()
  old: ClaimStatusUpdate | null; // Ensure null is explicitly allowed

  @Optional()
  @Required()
  new: ClaimStatusUpdate | null; // Use the new type here
}
