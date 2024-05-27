import { PrismaClient, user } from "@prisma/client";
import { Service } from "@tsed/di";

@Service()
export class UsersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async createUser(data: Partial<user> & { email: string; username: string }): Promise<user> {
    console.log(data);
    return this.prisma.user.create({
      data: { ...data }
    });
  }

  async getUserById(id: string): Promise<user | null> {
    return this.prisma.user.findUnique({
      where: { id: id }
    });
  }

  async updateUserById(id: string, data: Partial<user>): Promise<user> {
    return this.prisma.user.update({
      where: { id: id },
      data: data
    });
  }

  async deleteUserById(id: string): Promise<user> {
    return this.prisma.user.delete({ where: { id: id } });
  }

  async getUserByEmail(email: string): Promise<user | null> {
    return this.prisma.user.findUnique({
      where: { email: email }
    });
  }
}
