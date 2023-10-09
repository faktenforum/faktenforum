import { UsersService } from "@/services";
import { Req } from "@tsed/common";
import { Arg, OnVerify, Protocol } from "@tsed/passport";
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";

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
  constructor(private usersService: UsersService) {}

  async $onVerify(@Req() req: Req, @Arg(0) jwtPayload: any) {
    console.log("on Verify");
    const user = await this.usersService.getUserById(jwtPayload.sub);
    return user ? user : false;
  }
}
