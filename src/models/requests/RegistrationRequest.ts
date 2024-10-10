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
  firstName?: string;

  @Optional()
  @Property()
  lastName?: string;
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
  transientPayload: KratosTransientPayload;
}
