import { Inject, Req } from "@tsed/common";
import { Unauthorized } from "@tsed/exceptions";
import { Arg, OnVerify, Protocol } from "@tsed/passport";
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";
import { UsersService } from "~/services";

interface JwtPayload {
  sub: string; // Subject ( user id)
  iat: number; // Issued at timestamp
  exp: number; // Expiration timestamp
  role: string; // User Role
}

@Protocol<StrategyOptions>({
  name: "jwt",
  useStrategy: Strategy,
  settings: {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
    issuer: process.env.JWT_ISSUER,
    audience: process.env.JWT_AUDIENCE
  }
})
export class JwtProtocol implements OnVerify {
  @Inject()
  usersService: UsersService;

  async $onVerify(@Req() req: Req, @Arg(0) jwtPayload: JwtPayload) {
    const user = await this.usersService.getUserById(jwtPayload.sub);
    // check if token is expired is done by the tsed/passport-jwt package
    if (!user) {
      throw new Unauthorized("Invalid token");
    }
    return user ? user : false;
  }
}
