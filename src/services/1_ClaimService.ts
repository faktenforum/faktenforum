import { Claim, ClaimFile, ClaimResource, PrismaClient } from "@prisma/client";
import { Service } from "@tsed/di";
import { ClaimResourceCreateDTO } from "~/models/ClaimDTO";

type ClaimCreateDM = {
  title: string;
  description: string;
  resources: {
    originalUrl: string;
    files: {
      key: string;
      md5: string;
      mimeType: string;
      name: string;
      size: number;
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

  async createClaim(claimData: ClaimCreateDM, userId?: string): Promise<Claim> {
    const { title, description, resources } = claimData;

    // Start a transaction
    const result = await this.prisma.claim.create({
      data: {
        title: title,
        description: description,
        resources: {
          create: resources.map((resource) => ({
            userId: userId,
            originalUrl: resource.originalUrl,
            files: {
              create: resource.files.map((file) => ({
                submitterId: userId,
                key: file.key,
                md5: file.md5,
                mimeType: file.mimeType,
                name: file.name,
                size: file.size
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

  async updateClaimResourceById(
    claimId: string,
    resourceId: string,
    data: Partial<ClaimResource>
  ): Promise<ClaimResource> {
    return this.prisma.claimResource.update({
      where: {
        id_claimId: {
          id: resourceId,
          claimId: claimId
        }
      },
      data
    });
  }

  async createClaimResource(
    claimId: string,
    resource: Partial<ClaimResourceCreateDTO>,
    userId?: string
  ): Promise<ClaimResource> {
    return this.prisma.claimResource.create({
      data: {
        claimId: claimId,
        originalUrl: resource.originalUrl,
        files: {
          create: (resource.files || []).map((file) => ({
            submitterId: userId,
            key: file.key,
            md5: file.md5,
            mimeType: file.mimeType,
            name: file.name,
            size: file.size
          }))
        }
      }
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
