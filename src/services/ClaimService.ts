import { Claim, ClaimFile, ClaimResource, PrismaClient, Session } from "@prisma/client";
import { Service } from "@tsed/di";
import { Forbidden, NotFound } from "@tsed/exceptions";
import { ClaimCreateDTO } from "~/models/ClaimDTO";

type ClaimCreateDM = {
  title: string;
  description: string;
  resources: {
    originalUrl: string;
    files: {
      path: string;
      key: string;
      md5: string;
      mimeType: string;
      name: string;
    }[];
  }[];
};
type ClaimWithResources = Claim & {
  resources: Array<ClaimResource & { files: ClaimFile[] }>;
};
@Service()
export class ClaimService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async getAllClaims(): Promise<Claim[]> {
    return this.prisma.claim.findMany();
  }

  async createClaim(claimData: ClaimCreateDM, userId: string): Promise<Claim> {
    const { title, description, resources } = claimData;

    // Start a transaction
    const result = await this.prisma.claim.create({
      data: {
        title: title,
        description: description,
        resources: {
          create: resources.map((resource) => ({
            originalUrl: userId,
            files: {
              create: resource.files.map((file) => ({
                submitterId: userId,
                key: file.key,
                md5: file.md5,
                mimeType: file.mimeType,
                name: file.name
              }))
            }
          }))
        }
        // Additional fields can be added if needed
      }
    });

    return result;
  }

  async getClaimById(id: string): Promise<ClaimWithResources | null> {
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

  async getClaimFileByIds(claimId: string, fileId: string): Promise<ClaimFile | null> {
    return this.prisma.claimFile.findFirst({
      where: {
        id: fileId,
        claimResource: {
          claimId: claimId
        }
      }
    });
  }
}
