import { Property, ArrayOf, Required } from "@tsed/schema";
export class GetUserRoleRequest {
  @Property()
  @ArrayOf(String)
  @Required()
  ids: string[];
}
