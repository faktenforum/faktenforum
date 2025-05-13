import { Controller, Inject } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { Post, Tags, Returns } from "@tsed/schema";
import { Logger, Req } from "@tsed/common";
import { Response } from "@tsed/common";
import { ForKratosResponse } from "~/models";
import { AuthService, HasuraService } from "~/services";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { generateKratosResponse } from "~/utils";
import { UpdateUserBlockedDocument } from "~/generated/graphql";
@Controller("/webhooks/auth/login")
export class AuthLoginWebhookController {
  @Inject(AuthService)
  authService: AuthService;

  @Inject(HasuraService)
  hasuraService: HasuraService;

  @Inject(Logger)
  logger: Logger;

  @Post("/check-blocked")
  @Tags("Auth")
  @ApiKeyAccessControlDecorator({ service: "kratos" })
  @Returns(200, ForKratosResponse)
  async checkBlock(@BodyParams() body: any, @Response() response: Response) {
    if (body.metadata_public.blocked) {
      const now = new Date();
      const blockedUntil = body.metadata_public.blocked.until
        ? new Date(body.metadata_public.blocked.until)
        : null;

      if (blockedUntil && now < blockedUntil) {
        response.status(403);
        const message = genBlockedMessage(body.metadata_public.blocked.timestamp, blockedUntil.toISOString());

        return message;
      } else if (!blockedUntil) {
        response.status(403);

        const message = genBlockedMessage(body.metadata_public.blocked.timestamp, null);

        return message;
      } else {
        // If the block has expired, optionally update the block status in the database.
        await this.authService.updateUserBlockStatus(body.id, false);
        await this.hasuraService.adminRequest(UpdateUserBlockedDocument, {
          id: body.id,
          blocked: false
        });
      }
    }

    response.status(200);
    return {
      messages: []
    };
  }
}

function genBlockedMessage(timestamp: String, blockedUntil: String | null) {
  return generateKratosResponse(
    "#/traits/username",
    999998,
    `Your account has been blocked ${blockedUntil ? "until " + blockedUntil : "indefinitely"}. You do not agree with the measure? Write us an e-mail to faktenforum@correctiv.org.`,
    {
      blockedUntil: blockedUntil,
      blockedAt: timestamp
    }
  );
}
