import { Property, Required } from "@tsed/schema";

export class BlockedSchema {
  @Property()
  until: Date;

  @Property()
  @Required()
  timestamp: Date;
}

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
  blocked: BlockedSchema | null;

  @Property()
  @Required()
  lang: string;
}
