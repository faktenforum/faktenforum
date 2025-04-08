import { Property, Required, AdditionalProperties } from "@tsed/schema";
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
  @AdditionalProperties(true)
  @Required()
  metadata_public: {
    blocked?: BlockedSchema | null;
  };
}
