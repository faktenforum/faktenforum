import { Controller, Inject } from "@tsed/di";
import { Logger } from "@tsed/common";
import { BodyParams } from "@tsed/platform-params";
import { Post, Returns, Tags } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { RequestSuccessResponse } from "~/models";

import { MatrixService } from "~/services";

@Controller("/webhooks/chat/message")
export class ChatMessageWebHookController {
  @Inject(MatrixService)
  matrixService: MatrixService;

  @Inject(Logger)
  logger: Logger;

  @Post("/block")
  @Tags("Chat")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, RequestSuccessResponse).ContentType("application/json")) // prettier-ignore
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
}
