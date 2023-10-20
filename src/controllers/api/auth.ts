import { BodyParams, Controller, Get, HeaderParams, Inject, Post, Req, Res } from "@tsed/common";
import { Forbidden, Unauthorized } from "@tsed/exceptions";
import { Authenticate } from "@tsed/passport";
import { Returns, Security } from "@tsed/schema";
import { Request, Response } from "express";
import {
  AccountInfo,
  Credentials,
  Email,
  LoginResponse,
  PassportUser,
  PasswordUpdate,
  Session
} from "~/models";
import { AuthService, EnvService, UsersService } from "~/services";
import { timeStringToSeconds } from "~/utils/time";

@Controller("/auth")
export class AuthController {
  @Inject()
  envService: EnvService;
  @Inject()
  usersService: UsersService;
  @Inject()
  authService: AuthService;

  private setRefreshTokenCookie(response: Response, refreshToken: string) {
    response.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: this.envService.env !== "development", // Send the cookie only over HTTPS in production
      sameSite: "strict"
    });
  }
  @Post("/login")
  @Authenticate("local", { session: false })
  @Returns(200, LoginResponse)
  async login(
    @Req() req: Req,
    @HeaderParams("user-agent") userAgent: string,
    @BodyParams() credentials: Credentials,
    @Res() response: Response
  ) {
    // FACADE
    const user = req.user as PassportUser;
    const sessionId = await this.authService.createRefreshToken(user.id, userAgent);
    // this.setRefreshTokenCookie(response, sessionId);
    const token = this.authService.generateToken(user.id, user.role, sessionId);

    return { token };
  }
  // TODO: Implement refresh token rotation in the future
  // @Post("/refresh")
  // async refreshToken(@Req() request: Request, @Res() response: Response) {
  //   const refreshToken = request.cookies.refreshToken; // Extract refresh token from cookies
  //   if (!refreshToken) {
  //     throw new Error("Refresh token not provided");
  //   }

  //   const userId = await this.authService.validateRefreshToken(refreshToken);

  //   if (!userId) {
  //     throw new Error("Invalid refresh token");
  //   }
  //   const user = await this.usersService.getUserById(userId);
  //   if (!user) {
  //     throw new Error("User not found");
  //   }

  //   // Refresh Token Rotation
  //   const newRefreshToken = await this.authService.rotateRefreshToken(refreshToken);

  //   // generate new JWT
  //   const token = this.authService.generateToken(user.id, user.role, newRefreshToken);

  //   this.setRefreshTokenCookie(response, newRefreshToken);

  //   return { token };
  // }

  @Security("jwt")
  @Authenticate("jwt", { session: false })
  @Returns(401, Unauthorized).Description("Unauthorized")
  @Returns(403, Forbidden).Description("Forbidden")
  @Returns(200, AccountInfo)
  @Get("/session")
  async account(@Req() request: Request) {
    const { id, sessionId } = request.user as PassportUser;
    if (!sessionId) {
      throw new Error("Session id not found");
    }
    if (!(await this.authService.validateRefreshToken(id, sessionId))) {
      throw new Unauthorized("Invalid token session id");
    }
    const user = await this.usersService.getUserById(id);
    const sessions = await this.usersService.getUserSessions(id);

    if (!user) throw new Unauthorized("Invalid User");
    console.log(user);
    const token = this.authService.generateToken(user.id, user.role, sessionId);

    const resData: AccountInfo = {
      id: user.id,
      email: user.email,
      role: user.role,
      access_token: token,
      access_token_expires_in: timeStringToSeconds(this.envService.jwtTokenLifetime)

      // refresh_token: newRefreshToken,
      // refresh_token_expires_in: Date.now() + 360 * 1000000
    };
    return resData;
  }
  @Security("jwt")
  @Authenticate("jwt", { session: false })
  @Returns(401, Unauthorized).Description("Unauthorized")
  @Returns(403, Forbidden).Description("Forbidden")
  @Post("/logout")
  async logout(@Req() request: Request) {
    const { sessionId } = request.user as PassportUser;
    if (!sessionId) {
      throw new Error("Refresh token not provided");
    }
    await this.authService.revokeRefreshToken(sessionId);
    // Clear the refreshToken cookie
    // response.clearCookie("refreshToken");
    return { message: "Logged out successfully" };
  }

  @Post("/register")
  async register(@BodyParams("email") email: string, @BodyParams("password") password: string) {
    const user = await this.usersService.createUser(email, password);
    return {
      id: user.id,
      email: user.email
    };
  }

  @Security("jwt")
  @Authenticate("jwt", { session: false })
  @Returns(401, Unauthorized).Description("Unauthorized")
  @Returns(403, Forbidden).Description("Forbidden")
  @Returns(200, Array).Of(Session)
  @Get("/account/sessions")
  async sessions(@Req() request: Request) {
    const { id } = request.user as PassportUser;

    const sessions = await this.usersService.getUserSessions(id);
    return sessions?.map((session) => ({
      id: session.id,
      userAgent: session.userAgent,
      expiresAt: session.expiresAt,
      createdAt: session.createdAt,
      updatedAt: session.updatedAt
    }));
  }

  @Security("jwt")
  @Authenticate("jwt", { session: false })
  @Returns(401, Unauthorized).Description("Unauthorized")
  @Returns(403, Forbidden).Description("Forbidden")
  @Returns(200)
  @Post("/account/email")
  async updateEmail(@Req() request: Request, @BodyParams() body: Email) {
    const { id } = request.user as PassportUser;

    const user = await this.usersService.updateEmail(id, body.email);
    if (!user) throw new Error("User not found");
    return {};
  }

  @Security("jwt")
  @Authenticate("jwt", { session: false })
  @Returns(401, Unauthorized).Description("Unauthorized")
  @Returns(403, Forbidden).Description("Forbidden")
  @Returns(200)
  @Post("/account/password")
  async updatePassword(@Req() request: Request, @BodyParams() body: PasswordUpdate) {
    const { id } = request.user as PassportUser;

    const user = await this.usersService.updatePassword(id, {
      oldPass: body.oldPassword,
      newPass: body.newPassword
    });
    if (!user) throw new Error("User not found");
    return {};
  }
}
