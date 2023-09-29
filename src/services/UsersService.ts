import { PrismaClient, RefreshToken, User, UserRole } from "@prisma/client";
import { Injectable } from "@tsed/di";
import bcrypt from "bcrypt";

@Injectable()
export class UserService {
  private prisma: PrismaClient;

  constructor() {
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

  async createRefreshToken(userId: string, userAgent: string, userRole: UserRole, expiresIn: number = 86400): Promise<RefreshToken> {
    const expiration = new Date();
    expiration.setSeconds(expiration.getSeconds() + expiresIn);

    return this.prisma.refreshToken.create({
      data: {
        userId: userId,
        token: this.generateRandomToken(),
        expiresAt: expiration,
        userAgent: userAgent,
        userRole: userRole
      }
    });
  }

  async getRefreshToken(token: string): Promise<RefreshToken | null> {
    return this.prisma.refreshToken.findUnique({
      where: { token: token }
    });
  }

  async revokeRefreshToken(token: string): Promise<void> {
    await this.prisma.refreshToken.delete({
      where: { token: token }
    });
  }

  // Utility function to generate a random token for refresh tokens
  private generateRandomToken(): string {
    return require("crypto").randomBytes(48).toString("hex");
  }
}
