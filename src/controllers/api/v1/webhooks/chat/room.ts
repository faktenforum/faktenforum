import { Controller, Inject } from "@tsed/di";
import { Logger } from "@tsed/common";
import { BodyParams } from "@tsed/platform-params";
import { Description, Post, Returns, Tags } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { OnClaimStatusUpdatedRequest, DeleteFileRequest } from "~/models";
import { FileService, EnvService, ImageService, MatrixService, SpaceNames } from "~/services";
import { ClaimStatus, HasuraOperations, SubmissionStatuses } from "~/utils";

@Controller("/webhooks/chat/room")
export class ChatRoomWebHookController {
  @Inject(FileService)
  fileService: FileService;

  @Inject(ImageService)
  imageService: ImageService;

  @Inject(EnvService)
  envService: EnvService;

  @Inject(MatrixService)
  matrixService: MatrixService;

  @Inject(Logger)
  logger: Logger;

  @Post("/change-claim-room-visibility")
  @Description(
    "Webhook used by Hasura to change the visibility of a claim room, this happens if an claim changed visibility between community and editorial"
  )
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @Tags("Chat")
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
