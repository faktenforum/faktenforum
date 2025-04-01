import { Property, Required } from "@tsed/schema";
import { IsUUID } from "class-validator";

class BlockedSchema {
  @Property()
  until: Date;

  @Property()
  @Required()
  timestamp: Date;
}

export class WebhooksAuthLoginRequest {
  @Property()
  @Required()
  @IsUUID()
  id: string;

  @Property()
  @Required()
  metadata_public: {
    blocked: BlockedSchema;
  };
}
