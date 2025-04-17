import { Property, Required, Optional } from "@tsed/schema";

export class BlockAccountRequest {
  @Property()
  @Required()
  userId: string;

  @Property()
  @Required()
  blocked: boolean;

  @Property()
  @Optional()
  blockedUntil: Date | null;
}
