import { Property, Required, Enum } from "@tsed/schema";
import { IsUUID } from "class-validator";
import { KratosRole } from "~/services";

export class UpdateUserRoleRequest {
  @Required()
  @Property()
  @IsUUID()
  userId: string;

  @Required()
  @Property()
  @Enum(Object.values(KratosRole))
  role: KratosRole;
}
