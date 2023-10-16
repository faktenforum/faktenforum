import { Optional, Property } from "@tsed/schema";

export class PassportUser {
  @Property()
  id: string;

  @Property()
  email: string;

  @Property()
  role: string;

  @Property()
  @Optional()
  sessionId?: string;
}
