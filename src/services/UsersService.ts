import { PrismaClient, User, UserRole, UserInclude } from "@prisma/client";
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

  async getUserById(id: string, include?: UserInclude): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id: id },
      include
    });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email: email }
    });
  }
}
