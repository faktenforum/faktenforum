import { Controller, Inject } from "@tsed/di";
import { BodyParams, Context, Cookies } from "@tsed/platform-params";
import { Get, Post, Returns } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { RegistrationPreResponse, RegistrationRequest } from "~/models";
import { AuthService, HasuraService } from "~/services";

import { InsertUserDocument } from "~/generated/graphql";
import type { InsertUserMutation, InsertUserMutationVariables } from "~/generated/graphql";

const DEFAULT_LANGUAGE = "de";

@Controller("/webhooks")
export class KratosWebHookController {
  @Inject(HasuraService)
  hasuraService: HasuraService;

  @Inject(AuthService)
  authService: AuthService;

  @Get("/session")
  @(Returns(200, String).ContentType("application/json")) // prettier-ignore
  async getSessions(@Cookies("ory_kratos_session") cookieSession: string, @Context() ctx: Context) {
    const sessionCookie = cookieSession || ctx.request.getHeader("ory_kratos_session");

    const session = await this.authService.getKratosSession(sessionCookie);

    const hasuraSession = {
      "X-Hasura-User-Id": session.identity.id,
      "X-Hasura-Role": session.identity.metadata_public.role.toLowerCase(),
      Expires: new Date(session.expires_at).toUTCString()
    };
    return JSON.stringify(hasuraSession);
  }

  @Post("/registration-creation")
  @ApiKeyAccessControlDecorator({ service: "kratos" })
  @(Returns(200, String).ContentType("application/json")) // prettier-ignore
  async postFinalizeAcount(@BodyParams() body: RegistrationRequest) {
    console.log("body", body);
    await this.hasuraService.adminRequest<InsertUserMutation, InsertUserMutationVariables>(
      InsertUserDocument,
      {
        id: body.id,
        email: body.traits.email,
        username: body.traits.username,
        firstName: body.transientPayload.firstName,
        lastName: body.transientPayload.lastName
      }
    );
    return {};
  }

  @Post("/registration-metadata")
  @ApiKeyAccessControlDecorator({ service: "kratos" })
  @Returns(200, RegistrationPreResponse)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async preFinalizeAccount(@BodyParams() body: RegistrationRequest) {
    return {
      identity: {
        metadata_public: {
          role: "junior",
          lang: DEFAULT_LANGUAGE // TODO take from language selector on the page, once it exists
        }
      }
    };
  }
}
