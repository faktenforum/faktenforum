import { Controller, Inject } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { Post, Tags } from "@tsed/schema";
import { Forbidden } from "@tsed/exceptions";
import { AuthService } from "~/services";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { Logger } from "@tsed/common";
import { WebhooksAuthLoginRequest } from "~/models";
@Controller("/webhooks/auth/login")
export class AuthLoginWebhookController {
  @Inject(AuthService)
  authService: AuthService;

  @Inject(Logger)
  logger: Logger;

  // @Post("/check-blocked")
  // @Tags("Auth")
  // @ApiKeyAccessControlDecorator({ service: "kratos" })
  // async checkBlock(@BodyParams() body: WebhooksAuthLoginRequest) {
  //   this.logger.info(`[AuthLoginWebhookController] Checking if user ${JSON.stringify(body)} is blocked`);

  //   if (body.metadata_public.blocked) {
  //     const now = new Date();
  //     const blockedUntil = body.metadata_public.blocked.until
  //       ? new Date(body.metadata_public.blocked.until)
  //       : null;

  //     if (blockedUntil && now < blockedUntil) {
  //       throw new Forbidden(`User account is blocked until ${blockedUntil.toISOString()}`);
  //     } else if (!blockedUntil) {
  //       // Blocked indefinitely
  //       throw new Forbidden("User account is blocked indefinitely");
  //     } else {
  //       // If the block has expired, optionally update the block status in the database.
  //       await this.authService.updateUserBlockStatus(body.id, false);
  //     }
  //   }
  //   return { success: true };
  // }
}
