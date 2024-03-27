import { Controller, Inject } from "@tsed/di";
import { BodyParams, Cookies } from "@tsed/platform-params";
import { Get, Post, Returns } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { RegistrationPreResponse, RegistrationRequest } from "~/models";
import { AuthService, UsersService } from "~/services";

@Controller("/webhooks")
export class WebHookController {
  @Inject(UsersService)
  usersService: UsersService;

  @Inject(AuthService)
  authService: AuthService;
  @Get("/session")
  @Returns(200, String).ContentType("application/json") // Returns not a  because of It crashes on '-' in body response key values
  async getSessions(@Cookies("ory_kratos_session") sessionCookie: string) {
    const session = await this.authService.getKratosSession(sessionCookie);
    const hasuraSession = {
      "X-Hasura-User-Id": session.id,
      "X-Hasura-Role": session.identity.metadata_public.role,
      Expires: new Date(session.expires_at).toUTCString()
    };
    return JSON.stringify(hasuraSession);
  }

  @Post("/registration-creation")
  @ApiKeyAccessControlDecorator({ service: "kratos" })
  @Returns(200, String).ContentType("application/json")
  async postFinalizeAcount(@BodyParams() body: RegistrationRequest) {
    await this.usersService.createUser({
      id: body.id,
      email: body.traits.email,
      username: body.traits.username,
      firstName: body.transient_payload.firstName,
      lastName: body.transient_payload.lastName
    });
    return {};
  }

  @Post("/registration-metadata")
  @ApiKeyAccessControlDecorator({ service: "kratos" })
  @Returns(200, RegistrationPreResponse)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async preFinalizeAccount(@BodyParams() body: RegistrationRequest) {
    // this webhook is called before the account is created and response alters account creation data
    return {
      identity: {
        metadata_public: {
          role: "user"
        }
      }
    };
  }
}
