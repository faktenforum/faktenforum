import { EnvService, UserService } from "@/services";
import { BodyParams, Controller, Cookies, Get, HeaderParams, Post, Req, Res } from "@tsed/common";
import jwt from "jsonwebtoken";

@Controller("/auth")
export class AuthController {
  constructor(private userService: UserService, private envService: EnvService) {}

  private generateToken(userId: string, userRole: string) {
    return jwt.sign({ id: userId, role: userRole }, this.envService.jwtSecret, {
      expiresIn: this.envService.jwtTokenLifetime
    });
  }

  @Post("/login")
  async login(@BodyParams("email") email: string, @BodyParams("password") password: string, @HeaderParams("user-agent") userAgent: string) {
    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    const isValidPassword = await this.userService.verifyPassword(password, user.password);

    if (!isValidPassword) {
      throw new Error("Invalid password");
    }

    // Generate refresh token

    const refreshToken = await this.userService.createRefreshToken(user.id, user.role, userAgent);

    const token = this.generateToken(user.id, user.role);

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
    const user = await this.userService.getUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    // Refresh Token Rotation
    const newRefreshToken = await this.userService.rotateRefreshToken(refreshToken);

    // generate new JWT
    const token = this.generateToken(user.id, user.role);

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
