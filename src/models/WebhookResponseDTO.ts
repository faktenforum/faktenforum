import { Enum, Format, Optional, Property, Required } from "@tsed/schema";
import { PasswordFormatDecorator } from "~/decorators";

class KratosMetadataPublicDTO {
  @Required()
  @Property()
  role: "user" | "admin" | "newbie";
}
class KratosIdentityDTO {
  @Required()
  @Property()
  metadata_public: KratosMetadataPublicDTO;
}

export class FinalizeAccountResponseDTO {
  @Required()
  @Property()
  identity: KratosIdentityDTO;
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
  transient_payload: KratosTransientPayloadDTO;
}
