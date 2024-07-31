import { Inject, Service } from "@tsed/di";
import { Exception, Forbidden, Unauthorized } from "@tsed/exceptions";
import { EnvService } from "~/services";
import type { Session } from "@ory/client";
import type { UserRole } from "~/models";
type ValidatedSession = Session & { identity: { metadata_public: { role: UserRole } }; expires_at: string };

export type KratosAddress = {
  id: string;
  value: string;
  via: "email";
  created_at: "2024-07-25T10:54:39.940218Z";
  updated_at: "2024-07-25T10:54:39.940218Z";
};

export type KratosVerifiableAddress = KratosAddress & {
  verified: true;
  status: "completed";
  verified_at: "2024-07-25T10:55:01.966571Z";
};

export enum KratosRole {
  junior = "junior",
  intermediate = "intermediate",
  senior = "senior",
  moderator = "moderator",
  admin = "admin"
}

export type KratosUser = {
  id: "fa4c3f21-ee87-4196-ac70-e9c401ac166b";
  schema_id: string;
  schema_url: string;
  state: string;
  state_changed_at: string;
  traits: {
    email: string;
    username: string;
  };
  verifiable_addresses: KratosVerifiableAddress[];
  recovery_addresses: KratosAddress[];
  metadata_public: {
    role: KratosRole;
  };
  metadata_admin: null | unknown;
  created_at: string;
  updated_at: string;
  organization_id: null | unknown;
};

@Service()
export class AuthService {
  @Inject()
  envService: EnvService;

  kratosSessionUrl: URL;

  constructor(envService: EnvService) {
    this.kratosSessionUrl = new URL(`${envService.kratosPublicUrl}/sessions/whoami`);
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

  async getAllUsers(): Promise<KratosUser[]> {
    const response = await fetch(`${this.envService.kratosAdminUrl}/admin/identities`);
    if (!response.ok) {
      throw new Exception(response.status, await response.text());
    }
    return await response.json();
  }

  async updateUserRole(userId: string, role: KratosRole): Promise<KratosUser> {
    const updates = [
      {
        op: "replace",
        path: "/metadata_public/role",
        value: role
      }
    ];

    const response = await fetch(`${this.envService.kratosAdminUrl}/admin/identities/${userId}`, {
      method: "PATCH",
      body: JSON.stringify(updates),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Exception(response.status, await response.text());
    }

    return await response.json();
  }
}
