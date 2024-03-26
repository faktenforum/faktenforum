import { Format, Optional, Property, Required } from "@tsed/schema";
import { PasswordFormatDecorator } from "~/decorators";

class KratosTraitsDTO {
  @Required()
  @Property()
  email: string;

  @Required()
  @Property()
  username: string;
}

class KratosTransientPayloadDTO {
  @Optional()
  @Property()
  firstName?: string;

  @Optional()
  @Property()
  lastName?: string;
}

export class FinalizeAccountDTO {
  @Required()
  @Property()
  id: string;

  @Required()
  @Property()
  traits: KratosTraitsDTO;
  @Required()
  @Property()
  transient_payload: KratosTransientPayloadDTO;
}
