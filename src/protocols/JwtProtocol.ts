import { UsersService } from "@/services";
import { Inject, Req } from "@tsed/common";
import { Unauthorized } from "@tsed/exceptions";
import { Arg, OnVerify, Protocol } from "@tsed/passport";
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";

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

    if (!user) {
      throw new Unauthorized("Invalid token");
    }
    return user ? user : false;
  }
}
