import { Optional, Property, Required } from "@tsed/schema";

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
  id: string;

  @Required()
  @Property()
  traits: KratosTraits;
  @Required()
  @Property()
  transient_payload: KratosTransientPayload;
}
