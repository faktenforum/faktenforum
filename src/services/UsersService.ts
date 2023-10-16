import { PrismaClient, Session, User, UserRole } from "@prisma/client";
import { Service } from "@tsed/di";
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

  async getUserSessions(id: string): Promise<Session[] | null> {
    return this.prisma.session.findMany({ where: { userId: id } });
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

  async updatePassword(
    id: string,
    { oldPass, newPass }: { oldPass: string; newPass: string }
  ): Promise<User> {
    const oldHash = await bcrypt.hash(oldPass, 10); // 10 is the saltRounds; adjust as necessary
    const newHash = await bcrypt.hash(newPass, 10); // 10 is the saltRounds; adjust as necessary
    const data = await this.prisma.user.findUnique({
      where: { id },
      select: { password: true }
    });
    if (data?.password !== oldHash) {
      throw new Error("Old password is incorrect");
    }
    return this.prisma.user.update({
      where: { id },
      data: { password: newHash }
    });
  }
}
