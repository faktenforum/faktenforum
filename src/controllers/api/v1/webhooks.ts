import { Controller, Inject } from "@tsed/di";
import { BodyParams, Context, Cookies } from "@tsed/platform-params";
import { Delete, Get, Post, Returns } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { RegistrationPreResponse, RegistrationRequest } from "~/models";
import { AuthService, FileService, UsersService } from "~/services";

@Controller("/webhooks")
export class WebHookController {
  @Inject(UsersService)
  usersService: UsersService;

  @Inject(AuthService)
  authService: AuthService;

  @Inject(FileService)
  fileService: FileService;
  @Get("/session")
  @Returns(200, String).ContentType("application/json") // Returns not a  because of It crashes on '-' in body response key values
  async getSessions(@Cookies("ory_kratos_session") cookieSession: string, @Context() ctx: Context) {
    const sessionCookie = cookieSession || ctx.request.getHeader("ory_kratos_session"); // return host header || "";

    const session = await this.authService.getKratosSession(sessionCookie);
    console.log("Session:", session);
    const hasuraSession = {
      "X-Hasura-User-Id": session.identity.id,
      "X-Hasura-Role": session.identity.metadata_public.role.toLowerCase(),
      Expires: new Date(session.expires_at).toUTCString()
    };
    console.log("Session:", hasuraSession);
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
      first_name: body.transient_payload.first_name,
      last_name: body.transient_payload.last_name
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
          role: "junior"
        }
      }
    };
  }

  @Delete("/delete-file")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @Returns(200, Object).Description("Successfully deleted the file").ContentType("application/json")
  async deleteFile(@BodyParams() body: { id: string }) {
    this.fileService.deleteFile(body.id);
    return {}; // Returning an empty object with a 200 status code
  }
}
