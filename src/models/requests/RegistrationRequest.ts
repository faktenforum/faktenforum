import { Optional, Property, Required } from "@tsed/schema";
import { IsUUID } from "class-validator";
class KratosTraits {
  @Required()
  @Property()
  email: string;

  @Required()
  @Property()
  username: string;
}

class KratosTransientPayload {
  @Optional()
  @Property()
  first_name?: string;

  @Optional()
  @Property()
  last_name?: string;
}

export class RegistrationRequest {
  @Required()
  @Property()
  @IsUUID()
  id: string;

  @Required()
  @Property()
  traits: KratosTraits;
  @Required()
  @Property()
  transient_payload: KratosTransientPayload;
}
