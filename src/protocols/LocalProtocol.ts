import { Constant, Req } from "@tsed/common";
import { Inject } from "@tsed/di";
import { BeforeInstall, OnInstall, OnVerify, Protocol } from "@tsed/passport";
import { BodyParams } from "@tsed/platform-params";
import { IStrategyOptions, Strategy } from "passport-local";
import { PassportUser } from "~/models";
import { Credentials } from "~/models/";
import { AuthService, UsersService } from "~/services";

interface JwtSettings {
  secretOrKey: string;
  issuer?: string;
  audience?: string;
  expiresIn?: string | number;
  // include other relevant properties as needed
}

@Protocol<IStrategyOptions>({
  name: "local",
  useStrategy: Strategy,
  settings: {
    usernameField: "username",
    passwordField: "password"
  }
})
export class LocalProtocol implements OnVerify, OnInstall, BeforeInstall {
  @Inject()
  usersService: UsersService;
  @Inject()
  authService: AuthService;

  @Constant("passport.protocols.jwt.settings")
  jwtSettings: JwtSettings;

  // hook added with v6.99.0
  async $beforeInstall(settings: IStrategyOptions): Promise<IStrategyOptions> {
    // load something from backend
    // settings.usernameField = await this.usersService.loadFieldConfiguration()

    return settings;
  }

  $onInstall(strategy: Strategy): void {
    // intercept the strategy instance to adding extra configuration
  }

  async $onVerify(@Req() request: Req, @BodyParams() credentials: Credentials) {
    const { username, password } = credentials;

    const user = await this.usersService.getUserByEmail(username);

    if (!user) {
      return false;
      // OR throw new NotAuthorized("Wrong credentials")
    }
    const result = await this.authService.verifyPassword(password, user.password);
    if (!result) {
      return false;
      // OR throw new NotAuthorized("Wrong credentials")
    }
    const passportUser: PassportUser = {
      id: user.id,
      email: user.email,
      role: user.role
    };

    return passportUser;
  }
}
