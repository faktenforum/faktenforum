import { Credentials, LoginResponse, PassportUser } from "@/models";
import { EnvService, UsersService } from "@/services";
import { BodyParams, Controller, Cookies, Get, HeaderParams, Post, Req, Res } from "@tsed/common";
import { Authenticate } from "@tsed/passport";
import { Groups, Returns, Security } from "@tsed/schema";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

@Controller("/auth")
export class AuthController {
  constructor(private usersService: UsersService, private envService: EnvService) {}

  private generateToken(userId: string, userRole: string) {
    return jwt.sign({ id: userId, role: userRole }, this.envService.jwtSecret, {
      expiresIn: this.envService.jwtTokenLifetime
    });
  }

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
    const refreshToken = await this.usersService.createRefreshToken(user.id, userAgent);
    this.setRefreshTokenCookie(response, refreshToken);
    const token = this.generateToken(user.id, user.role);

    return { token };
  }

  @Post("/refresh")
  async refreshToken(@Res() response: Response, @Cookies("refreshToken") refreshToken: string) {
    if (!refreshToken) {
      throw new Error("Refresh token not provided");
    }

    const userId = await this.usersService.validateRefreshToken(refreshToken);

    if (!userId) {
      throw new Error("Invalid refresh token");
    }
    const user = await this.usersService.getUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    // Refresh Token Rotation
    const newRefreshToken = await this.usersService.rotateRefreshToken(refreshToken);

    // generate new JWT
    const token = this.generateToken(user.id, user.role);

    this.setRefreshTokenCookie(response, newRefreshToken);

    return { token };
  }

  @Get("/logout")
  async logout(@Req() request: Request, @Res() response: Response) {
    const refreshToken = request.cookies.refreshToken; // Extract refresh token from cookies
    await this.usersService.revokeRefreshToken(refreshToken);
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
