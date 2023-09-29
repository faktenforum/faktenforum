import { EnvService } from "@/services";
import { PrismaClient, RefreshToken, User, UserRole } from "@prisma/client";
import { Injectable } from "@tsed/di";
import bcrypt from "bcrypt";

@Injectable()
export class UserService {
  private prisma: PrismaClient;

  constructor(private envService: EnvService) {
    this.prisma = new PrismaClient();
  }

  async createUser(email: string, password: string, role: UserRole = UserRole.USER): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds; adjust as necessary
    return this.prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        role: role
      }
    });
  }

  async getUserById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id: id }
    });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email: email }
    });
  }

  async createRefreshToken(userId: string, userAgent: string): Promise<RefreshToken> {
    const expiration = new Date();
    expiration.setSeconds(expiration.getSeconds() + this.envService.jwtRefreshTokenLifetime);

    return this.prisma.refreshToken.create({
      data: {
        userId: userId,
        token: this.generateRandomToken(),
        expiresAt: expiration,
        userAgent: userAgent
      }
    });
  }

  async validateRefreshToken(refreshToken: string): Promise<string | null> {
    const tokenRecord = await this.prisma.refreshToken.findUnique({
      where: { token: refreshToken },
      select: { userId: true, expiresAt: true }
    });

    if (!tokenRecord) {
      return null;
    }

    const currentTimestamp = new Date();
    if (tokenRecord.expiresAt <= currentTimestamp) {
      // Token has expired
      await this.revokeRefreshToken(refreshToken);
      return null;
    }

    return tokenRecord.userId;
  }

  async rotateRefreshToken(token: string): Promise<string> {
    const tokenRecord = await this.prisma.refreshToken.findUnique({
      where: { token: token }
    });

    if (!tokenRecord) {
      throw new Error("Invalid refresh token");
    }

    const newToken = this.generateRandomToken();
    await this.prisma.refreshToken.update({
      where: { token: token },
      data: { token: newToken }
    });

    return newToken;
  }

  async revokeRefreshToken(token: string): Promise<void> {
    await this.prisma.refreshToken.delete({
      where: { token: token }
    });
  }

  async verifyPassword(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainTextPassword, hashedPassword);
  }

  // Utility function to generate a random token for refresh tokens
  private generateRandomToken(): string {
    return require("crypto").randomBytes(48).toString("hex");
  }
}
