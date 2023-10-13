import { Constant, Req } from "@tsed/common";
import { Inject } from "@tsed/di";
import { BeforeInstall, OnInstall, OnVerify, Protocol } from "@tsed/passport";
import { BodyParams } from "@tsed/platform-params";
import { IStrategyOptions, Strategy } from "passport-local";
import { PassportUser } from "~/models";
import { Credentials } from "~/models/";
import { AuthService, UsersService } from "~/services";

@Protocol<IStrategyOptions>({
  name: "local",
  useStrategy: Strategy,
  settings: {
    usernameField: "email",
    passwordField: "password"
  }
})
export class LocalProtocol implements OnVerify, OnInstall, BeforeInstall {
  @Inject()
  usersService: UsersService;
  @Inject()
  authService: AuthService;

  @Constant("passport.protocols.jwt.settings")
  jwtSettings: any;

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
    const { email, password } = credentials;

    const user = await this.usersService.getUserByEmail(email);

    if (!user) {
      return false;
      // OR throw new NotAuthorized("Wrong credentials")
    }

    if (!this.authService.verifyPassword(password, user.password)) {
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
