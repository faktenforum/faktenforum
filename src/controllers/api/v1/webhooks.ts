import { Controller } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { Get, Post, Returns } from "@tsed/schema";
import { SessionResponse } from "~/models/WebhookResponses";
const packageJSON = require("../../../../package.json"); // adjust the path as necessary

@Controller("/webhooks")
export class WebHookController {
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
  @Returns(200, String).ContentType("application/json") // S
  async postFinalizeAcount(@BodyParams() body: unknown) {
    console.log("finalize account", body);
    throw new Error("Not implemented");
    return {};
  }
}
