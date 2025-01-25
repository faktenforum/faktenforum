import { Property, Required } from "@tsed/schema";
import { IsUUID } from "class-validator";

export class CalculateClaimWorthinessRequest {
  @Property()
  @Required()
  @IsUUID()
  claimId: string;
}
