import { PrismaClient } from "@prisma/client";
import { Inject, Service } from "@tsed/di";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { EnvService } from "~/services";
import { timeStringToSeconds } from "~/utils/time";

@Service()
export class AuthService {
  @Inject()
  envService: EnvService;

  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // Utility function to generate a random token for refresh tokens
  private generateRandomToken(): string {
    return require("crypto").randomBytes(48).toString("hex");
  }

  async createRefreshToken(userId: string, userAgent: string): Promise<string> {
    const expiration = new Date();
    expiration.setSeconds(
      expiration.getSeconds() + timeStringToSeconds(this.envService.jwtRefreshTokenLifetime)
    );

    const dbEntry = await this.prisma.refreshToken.create({
      data: {
        userId: userId,
        token: this.generateRandomToken(),
        expiresAt: expiration,
        userAgent: userAgent
      }
    });
    return dbEntry.token;
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

  generateToken(userId: string, userRole: string) {
    return jwt.sign({ sub: userId, role: userRole }, this.envService.jwtSecret, {
      expiresIn: this.envService.jwtTokenLifetime,
      issuer: this.envService.jwtIssuer,
      audience: this.envService.jwtAudience
    });
  }
}
