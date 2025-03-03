import { Property, Required } from "@tsed/schema";
import { IsUUID } from "class-validator";

export class ActivateAccountRequest {
  @Property()
  @Required()
  @IsUUID()
  userId: string;
}
