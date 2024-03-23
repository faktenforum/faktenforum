import { PrismaClient, Session, User, UserRole } from "@prisma/client";
import { Service } from "@tsed/di";
import { Forbidden, NotFound } from "@tsed/exceptions";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { $log } from "@tsed/logger";

@Service()
export class UsersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async createUser(id: string, email: string, username: string): Promise<User> {
    return this.prisma.user.create({
      data: {
        id,
        email,
        username
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

  async deleteUserById(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id: id } });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email: email }
    });
  }
}
