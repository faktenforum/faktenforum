import { Property, Required } from "@tsed/schema";
import { UserRole } from "~/models";

class MetaDataPublic {
  @Required()
  @Property()
  role: UserRole;
}

class Identity {
  @Required()
  @Property()
  metadata_public: MetaDataPublic;
}

class ValidationMessage {
  @Property()
  id: number;

  @Property()
  text: string;

  @Property()
  type: "error" | "info" | "success";

  @Property()
  context: Record<string, any>;
}

class ValidationMessages {
  @Property()
  instance_ptr: string;

  @Property()
  messages: ValidationMessage[];
}

export class RegistrationPreResponse {
  @Required()
  @Property()
  identity: Identity;

  @Property()
  messages?: ValidationMessages[];
}
