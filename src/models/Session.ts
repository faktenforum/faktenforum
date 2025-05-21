import { Property, Required, ArrayOf, Enum } from "@tsed/schema";
import type { Session as KratosSession, SessionDevice as KratosSessionDevice } from "@ory/kratos-client";
import {
  AuthenticatorAssuranceLevel as KratosAuthenticatorAssuranceLevel,
  SessionAuthenticationMethod as KratosSessionAuthenticationMethod,
  SessionAuthenticationMethodMethodEnum as KratosSessionAuthenticationMethodMethodEnum
} from "@ory/kratos-client";
// 1. Omit the 'identity' property from the Kratos Session type
type SessionWithoutIdentity = Omit<KratosSession, "identity">;
const SessionAuthenticationMethodMethodEnum = Object.values(KratosSessionAuthenticationMethodMethodEnum);

const AuthenticatorAssuranceLevelEnum = Object.values(KratosAuthenticatorAssuranceLevel);

class SessionAuthenticationMethod implements KratosSessionAuthenticationMethod {
  @Property()
  @Required()
  @Enum(SessionAuthenticationMethodMethodEnum)
  method: KratosSessionAuthenticationMethodMethodEnum;

  @Property()
  @Required()
  @Enum(AuthenticatorAssuranceLevelEnum)
  aal: KratosAuthenticatorAssuranceLevel;

  @Property()
  @Required()
  completed_at: string;
}

class SessionDevice implements KratosSessionDevice {
  @Property()
  @Required()
  id: string;

  @Property()
  @Required()
  ip_address: string;

  @Property()
  @Required()
  user_agent: string;

  @Property()
  @Required()
  location: string;
}
// 2. Define a schema class for it
export class Session implements SessionWithoutIdentity {
  @Property()
  @Required()
  id: string;

  @Property()
  @Required()
  active: boolean;

  @Property()
  @Required()
  expires_at: string;

  @Property()
  @Required()
  authenticated_at: string;

  @Property()
  @Required()
  @Enum(KratosAuthenticatorAssuranceLevel)
  authenticator_assurance_level: KratosAuthenticatorAssuranceLevel;

  @Property()
  @Required()
  @ArrayOf(SessionAuthenticationMethod)
  authentication_methods: SessionAuthenticationMethod[];

  @Property()
  @Required()
  issued_at: string;

  @Property()
  @Required()
  @ArrayOf(SessionDevice)
  devices: SessionDevice[];
}
