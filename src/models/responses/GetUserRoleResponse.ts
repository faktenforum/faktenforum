import { Property, Required } from "@tsed/schema";

export class GetUserRoleResponse {
  @Property()
  @Required()
  id: string;

  @Property()
  @Required()
  role: string;
}
