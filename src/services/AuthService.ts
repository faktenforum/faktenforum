import { PrismaClient, User } from "@prisma/client";
import { Agenda, Define, Every } from "@tsed/agenda";
import { Inject, Service } from "@tsed/di";
import { Forbidden, Unauthorized } from "@tsed/exceptions";
import { Job } from "agenda";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { EnvService } from "~/services";
import { timeStringToSeconds } from "~/utils/time";

@Service()
@Agenda({ namespace: "authentication" })
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
  @Every("15 minutes", {
    name: "Delete expired sessions"
  })
  async deleteExpiredSessions(job: Job) {
    await this.prisma.session.deleteMany({
      where: {
        expiresAt: {
          lte: new Date()
        }
      }
    });
  }

  async createRefreshToken(userId: string, userAgent: string): Promise<string> {
    const expiration = new Date();
    expiration.setSeconds(
      expiration.getSeconds() + timeStringToSeconds(this.envService.jwtRefreshTokenLifetime)
    );

    const dbEntry = await this.prisma.session.create({
      data: {
        userId: userId,
        token: this.generateRandomToken(),
        expiresAt: expiration,
        userAgent: userAgent
      }
    });
    return dbEntry.token;
  }

  async validateRefreshToken(userId: string, refreshToken: string): Promise<boolean> {
    const tokenRecord = await this.prisma.session.findFirst({
      where: { token: refreshToken, userId: userId },
      select: { expiresAt: true }
    });

    if (!tokenRecord) {
      return false;
    }

    const currentTimestamp = new Date();
    if (tokenRecord.expiresAt <= currentTimestamp) {
      await this.revokeRefreshToken(refreshToken);
      return false;
    }

    return true;
  }

  async rotateRefreshToken(token: string): Promise<string> {
    const tokenRecord = await this.prisma.session.findUnique({
      where: { token: token }
    });

    if (!tokenRecord) {
      throw new Error("Invalid refresh token");
    }

    const newToken = this.generateRandomToken();
    await this.prisma.session.update({
      where: { token: token },
      data: { token: newToken }
    });

    return newToken;
  }

  async revokeRefreshToken(token: string): Promise<void> {
    await this.prisma.session.delete({
      where: { token: token }
    });
  }

  async verifyPassword(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainTextPassword, hashedPassword);
  }

  async updatePassword(
    id: string,
    { oldPass, newPass }: { oldPass: string; newPass: string }
  ): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { password: true }
    });
    if (!user) {
      throw new Forbidden("User not found!");
    }
    if (!(await bcrypt.compare(oldPass, user.password))) {
      throw new Forbidden("Old password is incorrect");
    }
    const newHash = await bcrypt.hash(newPass, 10); // 10 is the saltRounds; adjust as necessary
    await this.prisma.user.update({
      where: { id },
      data: { password: newHash }
    });
  }

  generateToken(userId: string, userRole: string, sessionId: string) {
    return jwt.sign({ sub: userId, role: userRole, sessionId: sessionId }, this.envService.jwtSecret, {
      expiresIn: this.envService.jwtTokenLifetime,
      issuer: this.envService.jwtIssuer,
      audience: this.envService.jwtAudience
    });
  }
}
