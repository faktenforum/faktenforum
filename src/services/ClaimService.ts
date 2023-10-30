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

  async createClaim(claimData: ClaimCreateDTO): Promise<Claim> {
    const { title, description, resources } = claimData;

    // Start a transaction
    const result = await this.prisma.claim.create({
      data: {
        title: title,
        description: description,
        resources: {
          create: resources.map((resource) => ({
            originalUrl: resource.originalUrl,
            files: {
              create: resource.files.map((file) => ({
                path: file,
                md5: "resource.md5",
                type: "OTHER"
              }))
            }
          }))
        }
        // Additional fields can be added if needed
      }
    });

    return result;
  }

  async getClaimById(id: string): Promise<Claim | null> {
    return this.prisma.claim.findUnique({
      where: { id: id },
      include: {
        resources: {
          include: {
            files: true
          }
        }
      }
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
