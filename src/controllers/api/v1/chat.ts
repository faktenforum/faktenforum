// src/controllers/AuthController.ts

import { Controller, Get, Res, Inject, Req } from "@tsed/common";
import { Cookies } from "@tsed/platform-params";
import { AuthService, EnvService } from "~/services";
import jwt from "jsonwebtoken"; // Import the jsonwebtoken library
import { AccessControlDecorator } from "~/decorators";
import { Returns, Tags, Description } from "@tsed/schema";
import { Session } from "~/models";

@Controller("/chat")
export class AuthController {
  @Inject(AuthService)
  authService: AuthService;

  @Inject(EnvService)
  envService: EnvService;

  @AccessControlDecorator({})
  @Tags("Chat")
  @Description("Endpoint to generate a JWT token to authorize a user on the matrix chat")
  @(Returns(200, String).ContentType("*/*").Description("Generated JWT token") // prettier-ignore
    ) // prettier-ignore
  @(Returns(400, String).Description("Bad request. The request or parameters are incorrect.") // prettier-ignore
    ) // prettier-ignore
  @(Returns(401, String).Description("Unauthorized. Authentication credentials are missing or invalid.") // prettier-ignore
    ) // prettier-ignore
  @(Returns(404, String).Description("File not found. The requested file does not exist.") // prettier-ignore
    ) // prettier-ignore
  @(Returns(500, String).Description("Internal server error. An unexpected error occurred.") ) // prettier-ignore
  @Get("/token")
  async genToken(
    @Cookies("ory_kratos_session") cookieSession: string,
    @Req() request: Req,
    @Res() response: Res
  ) {
    // Generate a JWT with the username (subject) using authlib

    const payload = { sub: (request.user as Session).username };
    const secret = this.envService.jwtSecret;

    const token = jwt.sign(payload, secret, { algorithm: "HS256" });

    // Send the JWT in the response
    response.json({ token });
  }
}
