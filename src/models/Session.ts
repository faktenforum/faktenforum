import { Property, Required } from "@tsed/schema";
import { UserRole } from "~/models";

export class Session {
  @Required()
  @Property()
  userId: string;

  @Required()
  @Property()
  username: string;

  @Required()
  @Property()
  role: UserRole;
}
