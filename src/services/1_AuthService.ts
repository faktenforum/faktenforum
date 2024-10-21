import { Inject, Service } from "@tsed/di";
import { Exception, Forbidden, Unauthorized } from "@tsed/exceptions";
import { EnvService } from "~/services";
import type { Session } from "@ory/kratos-client";
import { Configuration, IdentityApi } from "@ory/kratos-client";
import type { UserRole } from "~/models";
import { Logger } from "@tsed/common";

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

export enum KratosLang {
  de = "de",
  en = "en"
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
    role: UserRole;
    lang?: KratosLang;
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
  @Inject()
  logger: Logger;
  kratosSessionUrl: URL;
  kratosIdentityApi: IdentityApi;
  constructor(envService: EnvService) {
    this.kratosSessionUrl = new URL(`${envService.kratosPublicUrl}/sessions/whoami`);
    this.kratosIdentityApi = new IdentityApi(new Configuration({ basePath: envService.kratosAdminUrl }));
  }

  async getUserSession(sessionCookie: string): Promise<Session> {
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
      return session;
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

  async getUserIdentity(userId: string) {
    const response = await this.kratosIdentityApi.getIdentity({ id: userId });
    if (!response.data) {
      throw new Exception(response.status, response.statusText);
    }
    return response.data;
  }

  async deleteUser(userId: string): Promise<void> {
    await this.kratosIdentityApi.deleteIdentity({ id: userId });
  }

  async getAllUsers(): Promise<KratosUser[]> {
    const response = await fetch(`${this.envService.kratosAdminUrl}/admin/identities`);
    if (!response.ok) {
      throw new Exception(response.status, await response.text());
    }
    return await response.json();
  }

  async updateUserRole(userId: string, role: UserRole): Promise<KratosUser> {
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
