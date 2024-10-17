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

export class RegistrationPreResponse {
  @Required()
  @Property()
  identity: Identity;
}
