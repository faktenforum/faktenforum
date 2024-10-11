import { Controller, Inject } from "@tsed/di";
import { $log } from "@tsed/logger";
import { BodyParams } from "@tsed/platform-params";
import { Delete, Post, Returns } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { UpdateUserRoleRequest, OnClaimStatusUpdatedRequest, KratosUserSchema } from "~/models";

import {
  AuthService,
  FileService,
  EnvService,
  HasuraService,
  KratosUser,
  ImageService,
  MatrixService,
  SpaceNames
} from "~/services";
import { HasuraOperations } from "~/utils";
const DEFAULT_LANGUAGE = "de";

@Controller("/webhooks")
export class HasuraWebHookController {
  @Inject(FileService)
  fileService: FileService;

  @Inject(ImageService)
  imageService: ImageService;

  @Inject(HasuraService)
  hasuraService: HasuraService;

  @Inject(AuthService)
  authService: AuthService;

  @Inject(EnvService)
  envService: EnvService;

  @Inject(MatrixService)
  matrixService: MatrixService;

  @Delete("/delete-file")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, Object).Description("Successfully deleted the file").ContentType("application/json")) // prettier-ignore
  async deleteFile(@BodyParams() body: { id: string; mimeType: string }) {
    this.fileService.deleteFile(body.id);
    if (body.mimeType.startsWith("image/")) {
      this.imageService.deleteImageVersions(body.id);
    }
    return {}; // Returning an empty object with a 200 status code
  }

  transformKratosUser(user: KratosUser) {
    return {
      id: user.id,
      email: user.traits.email,
      username: user.traits.username,
      role: user.metadata_public.role,
      lang: user.metadata_public.lang ?? DEFAULT_LANGUAGE
    };
  }

  @Post("/all-users-with-roles")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, [KratosUserSchema]).ContentType("application/json")) // prettier-ignore
  async allUsersWithRoles() {
    const kratosUsers = await this.authService.getAllUsers();
    return kratosUsers.map(this.transformKratosUser);
  }

  @Post("/update-user-role")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, KratosUserSchema).ContentType("application/json")) // prettier-ignore
  async updateUserRole(@BodyParams() body: UpdateUserRoleRequest) {
    const kratosUser = await this.authService.updateUserRole(body.userId, body.role);
    return this.transformKratosUser(kratosUser);
  }

  @Post("/on-claim-status-changed")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, Object).Description("Successfully deleted the file").ContentType("application/json")) // prettier-ignore
  async onClaimStatusChanged(@BodyParams() body: OnClaimStatusUpdatedRequest) {
    // Changed type to 'any' for logging
    try {
      $log.debug(`[HasuraWebHookController] onClaimStatusChanged: ${JSON.stringify(body)}`);

      // Cast body to expected type after logging
      const typedBody = body as OnClaimStatusUpdatedRequest;

      switch (typedBody.op) {
        case HasuraOperations.INSERT:
          this.matrixService.createRoom(
            typedBody.claim_short_id,
            typedBody.claim_internal ? SpaceNames.InternalSubmissions : SpaceNames.CommunitySubmissions,
            `${this.envService.baseUrl}/claim/${typedBody.claim_short_id}`
          );
          break;
        case HasuraOperations.UPDATE:
          break;
        case HasuraOperations.DELETE:
          break;
        default:
          throw new Error(`Unknown operation: ${JSON.stringify(typedBody)}`);
      }
    } catch (error) {
      $log.error(`[HasuraWebHookController] Error processing onClaimStatusChanged: ${error.message}`);
    }
    return {}; // Returning an empty object with a 200 status code
  }
}
