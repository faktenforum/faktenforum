import { Controller, Inject } from "@tsed/di";
import { BodyParams, Cookies } from "@tsed/platform-params";
import { Get, Post, Returns } from "@tsed/schema";
import { FinalizeAccountDTO } from "~/models";
import { AuthService, UsersService } from "~/services";
import { $log } from "@tsed/common";

@Controller("/webhooks")
export class WebHookController {
  @Inject(UsersService)
  usersService: UsersService;

  @Inject(AuthService)
  authService: AuthService;
  @Get("/session")
  @Returns(200, String).ContentType("application/json") // Returns not a DTO because of It crashes on '-' in body response key values
  async getSessions(@Cookies("ory_kratos_session") sessionCookie: string) {
    $log.info("Session cookie", sessionCookie);
    const session = await this.authService.getKratosSession(sessionCookie);
    const hasuraSession = {
      "X-Hasura-User-Id": session.id,
      "X-Hasura-Role": session.identity.metadata_public.role,
      Expires: new Date(session.expires_at).toUTCString()
    };
    return JSON.stringify(hasuraSession);
  }

  @Post("/finalize-account")
  @Returns(200, String).ContentType("application/json")
  async postFinalizeAcount(@BodyParams() body: FinalizeAccountDTO) {
    await this.usersService.createUser({
      id: body.id,
      email: body.traits.email,
      username: body.traits.username,
      firstName: body.transient_payload.firstName,
      lastName: body.transient_payload.lastName
    });
    return {
      identity: {
        metadata_public: {
          role: "user"
        }
      }
    };
  }
}
