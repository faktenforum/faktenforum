import { Controller, Inject } from "@tsed/di";
import { Logger } from "@tsed/common";
import { BodyParams, Context, Cookies } from "@tsed/platform-params";
import { Delete, Get, Post, Returns } from "@tsed/schema";
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
import { ClaimStatus, HasuraOperations, SubmissionStatuses } from "~/utils";
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

  @Inject(Logger)
  logger: Logger;

  @Get("/session")
  @(Returns(200, String).ContentType("application/json")) // prettier-ignore
  async getSessions(@Cookies("ory_kratos_session") cookieSession: string, @Context() ctx: Context) {
    const sessionCookie = cookieSession || ctx.request.getHeader("ory_kratos_session");

    const session = await this.authService.getUserSession(sessionCookie);

    const hasuraSession = {
      "X-Hasura-User-Id": session.identity!.id,
      "X-Hasura-Role": session.identity!.metadata_public.role.toLowerCase(),
      Expires: session.expires_at
    };
    return JSON.stringify(hasuraSession);
  }

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
    this.matrixService.alterSpaceMembershipsByRole(body.userId, body.role);
    const kratosUser = await this.authService.updateUserRole(body.userId, body.role);
    return this.transformKratosUser(kratosUser);
  }

  @Post("/on-claim-status-changed")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, Object).Description("Successfully deleted the file").ContentType("application/json")) // prettier-ignore
  async onClaimStatusChanged(@BodyParams() body: object) {
    // Changed type to 'any' for logging
    try {
      this.logger.info(`[HasuraWebHookController] onClaimStatusChanged: ${JSON.stringify(body)}`);

      // Cast body to expected type after logging
      const typedBody = body as OnClaimStatusUpdatedRequest;

      switch (typedBody.op) {
        case HasuraOperations.INSERT: {
          const roomName = typedBody.new!.short_id.replace(/\//g, "-");
          this.matrixService.createRoom(
            roomName,
            typedBody.new?.internal ? SpaceNames.InternalSubmissions : SpaceNames.CommunitySubmissions,
            `${this.envService.baseUrl}/claim/${roomName}`
          );
          this.logger.info(`[HasuraWebHookController] Created room for claim ${roomName}`);
          break;
        }
        case HasuraOperations.UPDATE: {
          const oldSpace = this.getSpaceName(typedBody.old!.status, typedBody.old!.internal);
          const newSpace = this.getSpaceName(typedBody.new!.status, typedBody.new!.internal);
          const roomName = typedBody.new!.short_id.replace(/\//g, "-");
          if (oldSpace != newSpace) {
            this.logger.info(
              `[HasuraWebHookController] TRy Moving room ${roomName} from ${oldSpace} to ${newSpace}`
            );
            await this.matrixService.moveRoomToSpace(roomName, oldSpace, newSpace);
            this.logger.info(
              `[HasuraWebHookController] Moving room ${roomName} from ${oldSpace} to ${newSpace}`
            );
          }
          break;
        }
        case HasuraOperations.DELETE: {
          //TODO: delete room
          break;
        }
        default:
          throw new Error(`Unknown operation: ${JSON.stringify(typedBody)}`);
      }
      return { alteredRoom: true };
    } catch (error) {
      this.logger.error(`[HasuraWebHookController] Error processing onClaimStatusChanged: ${error.message}`);
    }
    return { alteredRoom: false }; // Returning an empty object with a 200 status code
  }
  private getSpaceName(status: ClaimStatus, internal: boolean) {
    const isSubmission = SubmissionStatuses.includes(status);
    if (isSubmission) {
      return internal ? SpaceNames.InternalSubmissions : SpaceNames.CommunitySubmissions;
    } else {
      return internal ? SpaceNames.InternalFactchecks : SpaceNames.CommunityFactchecks;
    }
  }
}
