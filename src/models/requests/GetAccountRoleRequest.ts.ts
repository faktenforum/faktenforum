import { Property, Required } from "@tsed/schema";
import { IsUUID } from "class-validator";
export class GetAccountRoleRequest {
  @Property()
  @Required()
  @IsUUID()
  id: string;
}
