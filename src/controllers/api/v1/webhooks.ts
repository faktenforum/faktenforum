import { Controller, Inject } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { Get, Post, Returns } from "@tsed/schema";
import { FinalizeAccountDTO } from "~/models";
import { UsersService } from "~/services";

@Controller("/webhooks")
export class WebHookController {
  @Inject(UsersService)
  usersService: UsersService;
  @Get("/session")
  @Returns(200, String).ContentType("application/json") // S
  async getSessions() {
    console.log("get session");

    return JSON.stringify({
      "X-Hasura-User-Id": "27",
      "X-Hasura-Role": "user",
      "Cache-Control": "max-age=60",
      Expires: "Mon, 30 Mar 2026 13:25:18 GMT"
    });
    //   return {        // Extract token from request
    // var token = request.get('Authorization');
    // // Fetch user_id that is associated with this token
    // fetchUserInfo(token, (result) => {
    //   // Return appropriate response to Hasura
    //   var hasuraVariables = {
    //     'X-Hasura-Role': 'user',  // result.role
    //     'X-Hasura-User-Id': '1'    // result.user_id
    //   };
    //   response.json(hasuraVariables);
    // });
    return {};
  }

  @Post("/finalize-account")
  @Returns(200, String).ContentType("application/json")
  async postFinalizeAcount(@BodyParams() body: FinalizeAccountDTO) {
    console.log("finalize account", body);
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
