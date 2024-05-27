import { Inject, Service } from "@tsed/di";
import { Exception, Forbidden, Unauthorized } from "@tsed/exceptions";
import { EnvService } from "~/services";
import type { Session } from "@ory/client";
import type { UserRole } from "~/models";
type ValidatedSession = Session & { identity: { metadata_public: { role: UserRole } }; expires_at: string };

@Service()
export class AuthService {
  @Inject()
  envService: EnvService;

  kratosSessionUrl: URL;

  constructor(envService: EnvService) {
    this.kratosSessionUrl = new URL(`${envService.kratosBaseUrl}/sessions/whoami`);
  }

  async getKratosSession(sessionCookie: string): Promise<ValidatedSession> {
    const response = await fetch(this.kratosSessionUrl, {
      method: "GET",
      headers: { cookie: `ory_kratos_session=${sessionCookie};` }
    });
    if (response.status === 200) {
      const session: Session = await response.json();

      if ((session.identity?.metadata_public as { role?: string })?.role === undefined) {
        throw new Exception(500, "Kratos response error: Role not found in session metadata");
      }
      if (session.expires_at === undefined) {
        throw new Exception(500, "Kratos response error: Expires_at not found in session");
      }
      return session as ValidatedSession;
    }
    if (response.status === 401) {
      throw new Unauthorized("Unauthorized");
    }
    if (response.status === 403) {
      throw new Forbidden("Forbidden");
    } else {
      throw new Exception(response.status, `Kratos error: ${response.statusText}`);
    }
  }
}
