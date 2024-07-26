import { Property, Required } from "@tsed/schema";

export class AllUsersWithRolesResponse {
  @Property()
  @Required()
  id: string;

  @Property()
  @Required()
  email: string;

  @Property()
  @Required()
  username: string;

  @Property()
  @Required()
  role: string;
}
