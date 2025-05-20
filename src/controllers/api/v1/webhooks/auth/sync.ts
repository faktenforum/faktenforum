import { Controller, Post, Inject, Logger } from "@tsed/common";

import { AuthService, HasuraService } from "~/services";
import { UpdateUserIdentityDetailsDocument, GetUserIdentityDetailsPagedDocument } from "~/generated/graphql";
import { Returns, Tags, Description } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import type {
  UpdateUserIdentityDetailsMutation,
  UpdateUserIdentityDetailsMutationVariables,
  GetUserIdentityDetailsPagedQuery,
  GetUserIdentityDetailsPagedQueryVariables
} from "~/generated/graphql";
@Controller("/webhooks/auth/account")
export class SyncAuthWebHookController {
  @Inject()
  authService: AuthService;

  @Inject()
  hasuraService: HasuraService;

  @Inject()
  logger: Logger;

  @Post("/sync")
  @Tags("Auth")
  @Description(
    "Webhook used by Hasura to sync the role of a user with Kratos. It is called via a hasura cron job"
  )
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @Returns(200, Object)
  async syncAccounts() {
    const PAGE_SIZE = 100;
    let hasuraOffset = 0;
    let totalUpdated = 0;
    let totalChecked = 0;

    while (true) {
      const res = await this.hasuraService.adminRequest<
        GetUserIdentityDetailsPagedQuery,
        GetUserIdentityDetailsPagedQueryVariables
      >(GetUserIdentityDetailsPagedDocument, {
        limit: PAGE_SIZE,
        offset: hasuraOffset
      });
      const users = res.user;
      if (!users.length) break;

      // 2. For each Hasura user, fetch Kratos user and compare
      for (const hasuraUser of users) {
        totalChecked++;
        let kratosUser;
        try {
          kratosUser = await this.authService.getUserIdentity(hasuraUser.id);
        } catch (e) {
          this.logger.error(e);
          this.logger.warn(`Kratos user not found for Hasura user ${hasuraUser.id}, skipping.`);
          continue;
        }
        if (!kratosUser) continue;

        const kratosRole = kratosUser.metadata_public?.role ?? null;
        const kratosVerified = !!kratosUser.verifiable_addresses?.[0]?.verified;
        const kratosBlocked = !!kratosUser.metadata_public?.blocked;

        const needsUpdate =
          hasuraUser.role !== kratosRole ||
          hasuraUser.verified !== kratosVerified ||
          JSON.stringify(hasuraUser.blocked) !== JSON.stringify(kratosBlocked);

        if (needsUpdate) {
          await this.hasuraService.adminRequest<
            UpdateUserIdentityDetailsMutation,
            UpdateUserIdentityDetailsMutationVariables
          >(UpdateUserIdentityDetailsDocument, {
            id: hasuraUser.id,
            role: kratosRole,
            verified: kratosVerified,
            blocked: kratosBlocked,
            blockedUntil: kratosBlocked ? kratosUser.metadata_public?.blocked?.until : null
          });
          totalUpdated++;
        }
      }

      hasuraOffset += PAGE_SIZE;
    }

    return {
      checked: totalChecked,
      updated: totalUpdated
    };
  }
}
