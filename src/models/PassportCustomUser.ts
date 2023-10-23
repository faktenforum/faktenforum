import { Optional, Property, Required } from "@tsed/schema";

export class PassportUser {
  @Property()
  @Required()
  id: string;

  @Property()
  @Required()
  email: string;

  @Property()
  @Required()
  role: string;

  @Property()
  @Optional()
  sessionId?: string;
}
