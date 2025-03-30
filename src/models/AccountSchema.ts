import { Property, Required } from "@tsed/schema";

export class AccountSchema {
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

  @Property()
  @Required()
  verified: boolean;

  @Property()
  @Required()
  lang: string;
}
