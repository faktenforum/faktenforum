import { UserService } from "@/services/UsersService";
import { BodyParams, Controller, Cookies, Get, Post, Req, Res } from "@tsed/common";
import jwt from "jsonwebtoken";

@Controller("/auth")
export class AuthController {
  constructor(private userService: UserService) {}

  @Post("/login")
  async login(@BodyParams("email") email: string, @BodyParams("password") password: string) {
    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    const isValidPassword = await this.userService.verifyPassword(password, user.password);

    if (!isValidPassword) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: parseInt(process.env.JWT_TOKEN_TOKEN_LIFETIME!)
    });

    return { token };
  }

  @Post("/refresh")
  async refreshToken(@Cookies() cookies: any) {
    const { refreshToken } = cookies;
    if (!refreshToken) {
      throw new Error("Refresh token not provided");
    }

    const userId = await this.userService.validateRefreshToken(refreshToken);

    if (!userId) {
      throw new Error("Invalid refresh token");
    }

    // Refresh Token Roation
    const newRefreshToken = await this.userService.rotateRefreshToken(refreshToken);

    // generate new JWT
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET!, {
      expiresIn: parseInt(process.env.JWT_TOKEN_TOKEN_LIFETIME!)
    });

    cookies("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: true, // Send the cookie only over HTTPS
      sameSite: "strict"
    });

    return { token };
  }

  @Get("/logout")
  async logout(@Req() request: Express.Request, @Res() response: Express.Response) {
    const refreshToken = request.cookies.refreshToken; // Extract refresh token from cookies
    await this.userService.revokeRefreshToken(refreshToken);

    // Clear the refreshToken cookie
    response.clearCookie("refreshToken");

    return { message: "Logged out successfully" };
  }
}
