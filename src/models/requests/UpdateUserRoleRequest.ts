import { Property, Required, Enum } from "@tsed/schema";
import { IsUUID } from "class-validator";
import { UserRole } from "~/models";

export class UpdateUserRoleRequest {
  @Required()
  @Property()
  @IsUUID()
  userId: string;

  @Required()
  @Property()
  @Enum(UserRole)
  role: UserRole;
}
