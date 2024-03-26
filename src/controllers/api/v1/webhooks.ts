import { Controller, Inject } from "@tsed/di";
import { BodyParams, Cookies } from "@tsed/platform-params";
import { Get, Post, Returns } from "@tsed/schema";
import { FinalizeAccountDTO } from "~/models";
import { UsersService } from "~/services";
import type { Session } from "@ory/client";
import { Forbidden, Unauthorized, Exception } from "@tsed/exceptions";

@Controller("/webhooks")
export class WebHookController {
  @Inject(UsersService)
  usersService: UsersService;
  @Get("/session")
  @Returns(200, String).ContentType("application/json") // Returns not a DTO because of It crashes on - in the header name
  async getSessions(@Cookies("ory_kratos_session") sessionCookie: string) {
    const url = "http://app.localhost:8000/api/v1/kratos/sessions/whoami";
    const response = await fetch(url, {
      method: "GET",
      headers: { cookie: `ory_kratos_session=${sessionCookie};` }
    });
    if (response.status === 200) {
      const session: Session = await response.json();

      if ((session.identity?.metadata_public as { role?: string })?.role === undefined) {
        throw new Exception(500, "Role not found in session metadata");
      }
      if (session.expires_at === undefined) {
        throw new Exception(500, "Expires_at not found in session");
      }
      const hasuraSession = {
        "X-Hasura-User-Id": session.id,
        "X-Hasura-Role": (session.identity?.metadata_public as { role?: string })?.role,
        Expires: new Date(session.expires_at).toUTCString()
      };
      return JSON.stringify(hasuraSession);
    }
    if (response.status === 401) {
      throw new Unauthorized("Unauthorized");
    }
    if (response.status === 403) {
      throw new Forbidden("Forbidden");
    } else {
      throw new Exception(response.status, `Kratos error: ${response.statusText}`);
    }
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
