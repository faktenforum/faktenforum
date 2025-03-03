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
  RequestSucessInfo,
  ActivateAccountRequest,
  ResendVerificationRequest
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
      lang: user.metadata_public.lang ?? DEFAULT_LANGUAGE
    };
  }

  @Post("/get-user-account-details")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, [KratosUserSchema]).ContentType("application/json")) // prettier-ignore
  async getUsersWithAccountDetails(@BodyParams() body: GetUserRoleRequest) {
    this.logger.warn(`[HasuraWebHookController] getUsersWithAccountDetails: ${JSON.stringify(body)}`);
    const result = await this.authService.getAllUsers(undefined, undefined, body.ids);
    this.logger.warn(`[HasuraWebHookController] getUsersWithAccountDetails: ${JSON.stringify(result)}`);
    return result.identities.map((user) => ({
      id: user.id,
      role: user.metadata_public.role,
      verified: !!user.verifiable_addresses?.[0]?.verified
    }));
  }

  @Post("/update-user-role")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, KratosUserSchema).ContentType("application/json")) // prettier-ignore
  async updateUserRole(@BodyParams() body: UpdateUserRoleRequest) {
    this.matrixService.alterSpaceMembershipsByRole(body.userId, body.role);
    const kratosUser = await this.authService.updateUserRole(body.userId, body.role);
    return this.transformKratosUser(kratosUser as Identity);
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
    return {
      success: true
    };
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

  @Post("/delete-account")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, RequestSucessInfo).Description("Successfully deleted the user").ContentType("application/json")) // prettier-ignore
  async deleteUser(@BodyParams() body: DeleteUserRequest) {
    try {
      this.logger.info(`[HasuraWebHookController] Deleting user: ${body.userId}`);
      // Get username from id
      const identity = await this.authService.getUserIdentity(body.userId);
      const username = identity.traits.username;
      this.logger.debug(`[HasuraWebHookController] Username: ${username}`);
      // Delete the user from Kratos using the Admin API
      this.logger.debug(`[HasuraWebHookController] Deleting user from Kratos`);
      await this.authService.deleteUser(body.userId);
      // anonymize user profile
      this.logger.debug(`[HasuraWebHookController] Anonymizing user profile`);
      await this.hasuraService.adminRequest(AnonymizeUserProfileDocument, {
        id: body.userId,
        username: body.userId
      });
      // deactivate user in matrix and set anonymous username
      this.logger.debug(`[HasuraWebHookController] Deactivating user in matrix`);
      await this.matrixService.deleteUser(username, body.userId);
      this.logger.debug(`[HasuraWebHookController] Successfully deleted user`);
      // Remove specific user data from Hasura
      return { success: true };
    } catch (error) {
      this.logger.error(`[HasuraWebHookController] Error deleting user: ${error.message}`);
      throw error;
    }
  }

  @Post("/activate-account")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, RequestSucessInfo).ContentType("application/json")) // prettier-ignore
  async activateAccount(@BodyParams() body: { userId: string }) {
    try {
      await this.authService.activateUser(body.userId);
      return { success: true };
    } catch (error) {
      this.logger.error(`[HasuraWebHookController] Activation failed: ${error.message}`);
      return { success: false };
    }
  }

  @Post("/request-verification-code")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, RequestSucessInfo).ContentType("application/json")) // prettier-ignore
  async resendVerificationEmail(@BodyParams() body: { email: string }) {
    try {
      await this.authService.requestVerificationCode(body.email);
      return { success: true };
    } catch (error) {
      this.logger.error(`[HasuraWebHookController] Resend failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }
}
