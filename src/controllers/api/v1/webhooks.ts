import { Controller, Inject } from "@tsed/di";
import { BodyParams, Context, Cookies } from "@tsed/platform-params";
import { Delete, Get, Post, Returns } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { RegistrationPreResponse, RegistrationRequest } from "~/models";
import { UpdateUserRoleRequest } from "~/models/requests/UpdateUserRoleRequest";
import { KratosUserSchema } from "~/models/responses/KratosUserSchema";
import { AuthService, FileService, UsersService, HasuraService, KratosUser, ImageService } from "~/services";

const DEFAULT_LANGUAGE = "de";

@Controller("/webhooks")
export class WebHookController {
  @Inject(UsersService)
  usersService: UsersService;

  @Inject(AuthService)
  authService: AuthService;

  @Inject(FileService)
  fileService: FileService;

  @Inject(ImageService)
  imageService: ImageService;

  @Inject(HasuraService)
  hasuraService: HasuraService;

  @Get("/session")
  @(Returns(200, String).ContentType("application/json") ) // prettier-ignore
  // Returns not a  because of It crashes on '-' in body response key values
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
  @(Returns(200, String).ContentType("application/json") ) // prettier-ignore
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
          role: "junior",
          lang: DEFAULT_LANGUAGE // TODO take from language selector on the page, once it exists
        }
      }
    };
  }

  @Delete("/delete-file")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, Object).Description("Successfully deleted the file").ContentType("application/json")) // prettier-ignore
  async deleteFile(@BodyParams() body: { id: string }) {
    this.fileService.deleteFile(body.id);
    this.imageService.deleteImageVersions(body.id);
    return {}; // Returning an empty object with a 200 status code
  }

  transformKratosUser(user: KratosUser) {
    return {
      id: user.id,
      email: user.traits.email,
      username: user.traits.username,
      role: user.metadata_public.role,
      lang: user.metadata_public.lang ?? DEFAULT_LANGUAGE
    };
  }

  @Post("/all-users-with-roles")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, [KratosUserSchema]).ContentType("application/json")) // prettier-ignore
  async allUsersWithRoles() {
    const kratosUsers = await this.authService.getAllUsers();
    return kratosUsers.map(this.transformKratosUser);
  }

  @Post("/update-user-role")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, KratosUserSchema).ContentType("application/json")) // prettier-ignore
  async updateUserRole(@BodyParams() body: UpdateUserRoleRequest) {
    const kratosUser = await this.authService.updateUserRole(body.userId, body.role);
    return this.transformKratosUser(kratosUser);
  }
}
