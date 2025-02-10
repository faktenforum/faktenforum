import { Property, Required, ArrayOf } from "@tsed/schema";

export class GetUserRoleRequest {
  @Property()
  @Required()
  @ArrayOf(String)
  ids: string[];
}
