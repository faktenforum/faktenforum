import { PrismaClient, Session, User, UserRole } from "@prisma/client";
import { Service } from "@tsed/di";
import { Forbidden, NotFound } from "@tsed/exceptions";
import bcrypt from "bcrypt";

@Service()
export class UsersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
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

  async updateUserById(id: string, data: Partial<User>): Promise<User> {
    return this.prisma.user.update({
      where: { id: id },
      data: data
    });
  }

  async deleteUserById(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id: id } });
    return;
  }

  async getUserSessions(id: string): Promise<Session[] | null> {
    return this.prisma.session.findMany({ where: { userId: id } });
  }

  async deleteUserSession(userId: string, sessionId: string): Promise<void> {
    const session = await this.prisma.session.findUnique({ where: { id: sessionId } });
    if (!session) throw new NotFound("Session not found");
    if (session.userId !== userId) throw new Forbidden("Session does not belong to user");
    await this.prisma.session.delete({ where: { id: sessionId } });
    return;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email: email }
    });
  }

  async updateEmail(userId: string, email: string): Promise<User> {
    return this.prisma.user.update({
      where: { id: userId },
      data: { email }
    });
  }
}
