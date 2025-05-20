import { Inject, Service } from "@tsed/di";
import { Exception, Forbidden, Unauthorized } from "@tsed/exceptions";
import { EnvService } from "~/services";
import type { Session } from "@ory/kratos-client";
import {
  Configuration,
  IdentityApi,
  type Identity,
  FrontendApi,
  GetSessionExpandEnum
} from "@ory/kratos-client";
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

export type BlockedInfo = {
  until: string | null; // ISO timestamp or null for indefinite blocks
  timestamp: string; // When the block was applied
};

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
    blocked?: BlockedInfo | null;
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
  kratosFrontendApi: FrontendApi;

  constructor(envService: EnvService) {
    this.kratosSessionUrl = new URL(`${envService.kratosPublicUrl}/sessions/whoami`);
    const config = new Configuration({
      basePath: envService.kratosAdminUrl,
      baseOptions: { validateStatus: () => true }
    });

    this.kratosIdentityApi = new IdentityApi(config);
    this.kratosFrontendApi = new FrontendApi(config);
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

  async getUserSessionBySessionId(sessionId: string) {
    const response = await this.kratosIdentityApi.getSession({
      id: sessionId,
      expand: [GetSessionExpandEnum.Identity]
    });
    if (!response.data) {
      throw new Exception(response.status, response.statusText);
    }
    return response.data;
  }

  async getAllUserSessions(userId: string, activeOnly?: boolean) {
    const response = await this.kratosIdentityApi.listIdentitySessions({ id: userId, active: activeOnly });
    return response.data.map((session) => {
      return {
        ...session,
        identity: undefined
      };
    });
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

  async getAllUsers(
    perPage?: number,
    pageToken?: string,
    ids?: string[]
  ): Promise<{ identities: Identity[]; nextPageToken?: string }> {
    const response = await this.kratosIdentityApi.listIdentities({ perPage, pageToken, ids });
    if (response.status !== 200) {
      throw new Exception(response.status, response.statusText);
    }

    const linkHeader = response.headers?.get("Link") ?? null;
    let nextPageToken: string | undefined;

    if (linkHeader) {
      const matches = linkHeader.match(/<[^>]+page_token=([^>]+)>; rel="next"/);
      if (matches) {
        nextPageToken = matches[1];
      }
    }

    return { identities: response.data, nextPageToken };
  }

  async revokeSession(sessionId: string): Promise<void> {
    await this.kratosIdentityApi.disableSession({ id: sessionId });
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

  async requestVerificationCode(email: string): Promise<void> {
    try {
      const flow = await this.kratosFrontendApi.createNativeVerificationFlow();

      const response = await this.kratosFrontendApi.updateVerificationFlow({
        flow: flow.data.id,
        updateVerificationFlowBody: {
          email,
          method: "code"
        }
      });

      if (response.status !== 200 || !response.data) {
        throw new Exception(
          response.status,
          response.data?.error?.message || "Failed to resend verification code"
        );
      }
    } catch (error) {
      this.logger.error("Verification code resend failed", error);
      throw new Exception(500, "Failed to resend verification code");
    }
  }

  async verifyUserEmail(userId: string): Promise<Identity> {
    try {
      const response = await this.kratosIdentityApi.patchIdentity({
        id: userId,
        jsonPatch: [
          //users have to have only on eemail adresss so it save to asume that the first one is the verified one
          {
            op: "replace",
            path: "/verifiable_addresses/0/verified",
            value: true
          },
          {
            op: "replace",
            path: "/verifiable_addresses/0/status",
            value: "completed"
          },
          {
            op: "replace",
            path: "/verifiable_addresses/0/verified_at",
            value: new Date().toISOString()
          }
        ]
      });

      if (response.status !== 200 || !response.data) {
        const errorDetails = response.data?.error?.message || JSON.stringify(response.data);
        this.logger.error(`Activation failed: ${errorDetails}`);
        throw new Exception(response.status, `Kratos error: ${errorDetails}`);
      }

      return response.data;
    } catch (error) {
      this.logger.error("User activation failed", error);
      throw new Exception(error.status || 500, error.message || "Failed to activate user");
    }
  }

  async updateUserBlockStatus(
    userId: string,
    isBlocked: boolean,
    blockedUntil: Date | null = null
  ): Promise<Identity> {
    try {
      //check if user exists
      const response = await this.kratosIdentityApi.getIdentity({ id: userId });
      if (response.status !== 200 || !response.data) {
        throw new Exception(response.status, `Failed to get user: ${response.statusText}`);
      }
      if (!!response.data.metadata_public.blocked === isBlocked && blockedUntil === null && !isBlocked) {
        throw new Exception(400, "User is already unblocked");
      }

      if (isBlocked) {
        const blockedInfo: BlockedInfo = {
          until: blockedUntil?.toISOString() || null,
          timestamp: new Date().toISOString()
        };

        // Use JSON Patch to update only the blocked field
        const response = await this.kratosIdentityApi.patchIdentity({
          id: userId,
          jsonPatch: [
            {
              op: "replace",
              path: "/metadata_public/blocked",
              value: blockedInfo
            }
          ]
        });

        if (response.status !== 200 || !response.data) {
          throw new Exception(response.status, `Failed to block user: ${response.statusText}`);
        }

        return response.data;
      } else {
        // When unblocking, set the blocked field to null
        const response = await this.kratosIdentityApi.patchIdentity({
          id: userId,
          jsonPatch: [
            {
              op: "replace",
              path: "/metadata_public/blocked",
              value: null
            }
          ]
        });

        if (response.status !== 200 || !response.data) {
          throw new Exception(response.status, `Failed to unblock user: ${response.statusText}`);
        }

        return response.data;
      }
    } catch (error) {
      this.logger.error(`Failed to update user block status: ${error.message}`, error);
      throw new Exception(error.status || 500, error.message || "Failed to update user block status");
    }
  }

  async revokeAllUserSessions(userId: string): Promise<void> {
    try {
      const response = await this.kratosIdentityApi.deleteIdentitySessions({ id: userId });
      if (response.status === 204) {
        this.logger.info(`Successfully revoked all sessions for user ${userId}`);
      } else {
        this.logger.error(
          `Failed to revoke all sessions for user ${userId}  with response status ${response.status}`
        );
      }
    } catch (error) {
      this.logger.error(`Error revoking sessions for user ${userId}`, error);
      throw new Exception(error.status || 500, error.message || "Failed to revoke user sessions");
    }
  }
}
