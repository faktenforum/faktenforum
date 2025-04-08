import { Controller, Inject } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { Post, Tags, Returns } from "@tsed/schema";
import { Forbidden } from "@tsed/exceptions";
import { AuthService } from "~/services";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { Logger } from "@tsed/common";
import { WebhooksAuthLoginRequest } from "~/models";
import { Response, ResponseStatus } from "@tsed/common";
@Controller("/webhooks/auth/login")
export class AuthLoginWebhookController {
  @Inject(AuthService)
  authService: AuthService;

  @Inject(Logger)
  logger: Logger;

  @Post("/check-blocked")
  @Tags("Auth")
  @ApiKeyAccessControlDecorator({ service: "kratos" })
  @(Returns(200, String).ContentType("application/json"))
  async checkBlock(@BodyParams() body: any, @Response() response: Response) {
    this.logger.info(`[AuthLoginWebhookController] Checking if user ${JSON.stringify(body)} is blocked`);

    if (body.metadata_public.blocked) {
      const now = new Date();
      const blockedUntil = body.metadata_public.blocked.until
        ? new Date(body.metadata_public.blocked.until)
        : null;

      if (blockedUntil && now < blockedUntil) {
        this.logger.info(
          `[AuthLoginWebhookController] User ${body.id} is blocked until ${blockedUntil.toISOString()}`
        );
        response.status(403);
        return {
          messages: [
            {
              instance_ptr: "#/traits/username", // Points to the field that failed validation.
              messages: [
                {
                  id: 999999,
                  type: "error",
                  text: `Your account has been blocked until ${blockedUntil.toISOString()}. You do not agree with the measure? Write us an e-mail to faktenforum@correctiv.org.`,
                  context: {
                    blockedAt: body.metadata_public.blocked.timestamp,
                    blockedUntil: blockedUntil.toISOString()
                  }
                }
              ]
            }
          ]
        };
      } else if (!blockedUntil) {
        // Blocked indefinitely
        this.logger.info(`[AuthLoginWebhookController] User ${body.id} is blocked indefinitely!!!!`);
        response.status(403);

        this.logger.info(`[AuthLoginWebhookController] Response:  `);
        return {
          messages: [
            {
              instance_ptr: "#/traits/username", // Points to the field that failed validation.
              messages: [
                {
                  id: 999998,
                  type: "error",
                  text: `Your account has been blocked until. You do not agree with the measure? Write us an e-mail to faktenforum@correctiv.org.`
                  // context: {
                  //   // Contextual information about the error
                  //   blockedAt: body.metadata_public.blocked.timestamp
                  // }
                }
              ]
            }
          ]
        };
      } else {
        // If the block has expired, optionally update the block status in the database.
        await this.authService.updateUserBlockStatus(body.id, false);
      }
    }
    return;
  }
}
