import { Claim, PrismaClient, Session } from "@prisma/client";
import { Service } from "@tsed/di";
import { Forbidden, NotFound } from "@tsed/exceptions";
import { ClaimCreateDTO } from "~/models/ClaimDTO";

@Service()
export class ClaimService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async getAllClaims(): Promise<Claim[]> {
    return this.prisma.claim.findMany();
  }

  async createClaim(claim: ClaimCreateDTO): Promise<Claim> {
    return this.prisma.claim.create({
      data: claim
    });
  }

  async getClaimById(id: string): Promise<Claim | null> {
    return this.prisma.claim.findUnique({
      where: { id: id }
    });
  }

  async updateClaimById(id: string, data: Partial<Claim>): Promise<Claim> {
    return this.prisma.claim.update({
      where: { id: id },
      data: data
    });
  }

  async deleteClaimById(id: string): Promise<Claim> {
    return this.prisma.claim.delete({ where: { id: id } });
  }
}
