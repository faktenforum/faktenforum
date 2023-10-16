import { BodyParams, Controller, Cookies, Get, HeaderParams, Inject, Post, Req, Res } from "@tsed/common";
import { Forbidden, Unauthorized } from "@tsed/exceptions";
import { Authenticate } from "@tsed/passport";
import { Groups, In, Returns, Security } from "@tsed/schema";
import { Request, Response } from "express";
import { AccountInfo, Credentials, LoginResponse, PassportUser } from "~/models";
import { AuthService, EnvService, UsersService } from "~/services";

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
    const refreshToken = await this.authService.createRefreshToken(user.id, userAgent);
    this.setRefreshTokenCookie(response, refreshToken);
    const token = this.authService.generateToken(user.id, user.role);

    return { token };
  }

  @Post("/refresh")
  async refreshToken(@Req() request: Request, @Res() response: Response) {
    const refreshToken = request.cookies.refreshToken; // Extract refresh token from cookies
    if (!refreshToken) {
      throw new Error("Refresh token not provided");
    }

    const userId = await this.authService.validateRefreshToken(refreshToken);

    if (!userId) {
      throw new Error("Invalid refresh token");
    }
    const user = await this.usersService.getUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    // Refresh Token Rotation
    const newRefreshToken = await this.authService.rotateRefreshToken(refreshToken);

    // generate new JWT
    const token = this.authService.generateToken(user.id, user.role);

    this.setRefreshTokenCookie(response, newRefreshToken);

    return { token };
  }

  @Security("jwt")
  @Authenticate("jwt", { session: false })
  @Returns(401, Unauthorized).Description("Unauthorized")
  @Returns(403, Forbidden).Description("Forbidden")
  @Returns(200, AccountInfo)
  @Get("/session")
  async account(@Req() request: Request, @Res() response: Response) {
    const refreshToken = request.cookies.refreshToken; // Extract refresh token from cookies
    const { id } = request.user as PassportUser;

    const user = await this.usersService.getUserById(id);
    console.log(user);
    if (!user) throw new Error("User not found");
    console.log("Refresh Token", refreshToken);
    const userId = await this.authService.validateRefreshToken(refreshToken);
    // Refresh Token Rotation
    const newRefreshToken = await this.authService.rotateRefreshToken(refreshToken);

    // generate new JWT
    const token = this.authService.generateToken(user.id, user.role);

    this.setRefreshTokenCookie(response, newRefreshToken);
    const resData: AccountInfo = {
      id: user.id,
      email: user.email,
      role: user.role,
      access_token: token,
      access_token_expires_in: Date.now() + 60 * 1000,
      refresh_token: newRefreshToken
    };
    return resData;
  }

  @Post("/logout")
  async logout(@Req() request: Request, @Res() response: Response) {
    const refreshToken = request.cookies.refreshToken; // Extract refresh token from cookies
    if (!refreshToken) {
      throw new Error("Refresh token not provided");
    }
    await this.authService.revokeRefreshToken(refreshToken);
    // Clear the refreshToken cookie
    response.clearCookie("refreshToken");
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
}
