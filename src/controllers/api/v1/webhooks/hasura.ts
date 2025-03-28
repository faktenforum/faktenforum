import { Controller, Inject } from "@tsed/di";
import { Logger } from "@tsed/common";
import { BodyParams, Context, Cookies } from "@tsed/platform-params";
import { Delete, Get, Post, Returns } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import {
  UpdateUserRoleRequest,
  OnClaimStatusUpdatedRequest,
  KratosUserSchema,
  CalculateClaimWorthinessRequest,
  DeleteUserRequest,
  DeleteFileRequest,
  GetUserRoleRequest,
  RequestSucessInfo
} from "~/models";

import {
  AuthService,
  FileService,
  EnvService,
  HasuraService,
  ImageService,
  MatrixService,
  SpaceNames,
  ClaimWorthinessService
} from "~/services";
import { ClaimStatus, HasuraOperations, SubmissionStatuses } from "~/utils";
import { Identity } from "@ory/kratos-client";
import { AnonymizeUserProfileDocument } from "~/generated/graphql";

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

  @Inject(ClaimWorthinessService)
  claimWorthinessService: ClaimWorthinessService;

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
      "X-Hasura-Lang": session.identity!.metadata_public.lang ?? DEFAULT_LANGUAGE,
      "X-Hasura-Username": session.identity!.traits.username,
      Expires: session.expires_at
    };
    return JSON.stringify(hasuraSession);
  }

  @Delete("/delete-file")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, Object).Description("Successfully deleted the file").ContentType("application/json")) // prettier-ignore
  async deleteFile(@BodyParams() body: DeleteFileRequest) {
    this.fileService.deleteFile(body.id);
    if (body.mimeType.startsWith("image/")) {
      this.imageService.deleteImageVersions(body.id);
    }
    return {}; // Returning an empty object with a 200 status code
  }

  transformKratosUser(user: Identity) {
    return {
      id: user.id,
      email: user.traits.email,
      username: user.traits.username,
      role: user.metadata_public.role,
      lang: user.metadata_public.lang ?? DEFAULT_LANGUAGE,
      verified: !!user.verifiable_addresses?.[0]?.verified
    };
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

  @Post("/block-room-message")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, RequestSucessInfo).ContentType("application/json")) // prettier-ignore
  async blockMessage(
    @BodyParams()
    body: {
      roomId: string;
      messageId: string;
      userId: string;
      userRole: string;
      userName: string;
    }
  ) {
    // Log the request headers
    this.logger.info(`[HasuraWebHookController] block Request Headers: ${JSON.stringify(body)}`);

    await this.matrixService.blockMessage(body.roomId, body.messageId, body.userName, body.userRole);
    return { success: true };
  }

  private getSpaceName(status: ClaimStatus, internal: boolean) {
    const isSubmission = SubmissionStatuses.includes(status);
    if (isSubmission) {
      return internal ? SpaceNames.InternalSubmissions : SpaceNames.CommunitySubmissions;
    } else {
      return internal ? SpaceNames.InternalFactchecks : SpaceNames.CommunityFactchecks;
    }
  }

  @Post("/calculate-checkworthiness")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(204).ContentType("application/json")) // prettier-ignore
  async calculateCheckworthiness(@BodyParams() body: CalculateClaimWorthinessRequest): Promise<void> {
    this.logger.info(`[HasuraWebHookController] calculateCheckworthiness: ${JSON.stringify(body)}`);
    this.claimWorthinessService.inferClaimWorthiness(body.claimId);
    return;
  }

  @Post("/calculate-cw-for-all-claims")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200).ContentType("application/json")) // prettier-ignore
  async calculateForAllClaims(): Promise<void> {
    this.logger.info(`[HasuraWebHookController] calculateForAllClaims`);
    this.claimWorthinessService.inferAllnewClaims();
    return;
  }
}
