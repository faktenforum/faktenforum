import { PrismaClient, User } from "@prisma/client";
import { Service } from "@tsed/di";

@Service()
export class UsersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async createUser(data: Partial<User> & { email: string; username: string }): Promise<User> {
    return this.prisma.user.create({
      data: { ...data }
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

  async deleteUserById(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id: id } });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email: email }
    });
  }
}
