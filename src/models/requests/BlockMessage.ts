import { Property, Required } from "@tsed/schema";
import { IsUUID } from "class-validator";

export class BlockMessageRequest {
  @Property()
  @Required()
  roomId: string;

  @Property()
  @Required()
  messageId: string;

  @Property()
  @Required()
  userId: string;

  @Property()
  @Required()
  userRole: string;

  @Property()
  @Required()
  userName: string;
}
