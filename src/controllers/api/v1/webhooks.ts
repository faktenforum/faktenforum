import { Controller } from "@tsed/di";
import { Get, Returns } from "@tsed/schema";
import { SessionResponse } from "~/models/";
const packageJSON = require("../../../../package.json"); // adjust the path as necessary

@Controller("/webhooks")
export class WebHookController {
  @Get("/session")
  @Returns(200, SessionResponse)
  async getSessions() {
    console.log("get session");

    return {
      "X-Hasura-User-Id": "27",
      "X-Hasura-Role": "user",
      "Cache-Control": "max-age=60",
      Expires: "Mon, 30 Mar 2026 13:25:18 GMT"
    };
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
}
