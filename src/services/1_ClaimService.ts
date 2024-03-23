import { Claim, File, ClaimResource, Prisma, PrismaClient } from "@prisma/client";
import { Service } from "@tsed/di";
import { ClaimQueryParams, ClaimResourceCreateDTO } from "~/models/ClaimDTO";

type ClaimCreateDM = {
  title: string;
  description: string;
  resources: {
    originalUrl: string;
    file?: {
      key: string;
      md5: string;
      mimeType: string;
      name: string;
      size: number;
    };
  }[];
};
type ClaimWithResources = Claim & {
  resources: Array<ClaimResource & { file: File | undefined }>;
};

type PaginatedClaimsResult = {
  data: ClaimWithResources[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
};

@Service()
export class ClaimService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
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
            createdBy: userId,
            originalUrl: resource.originalUrl,
            file: resource.file
              ? {
                  create: {
                    createdBy: userId,
                    key: resource.file.key,
                    md5: resource.file.md5,
                    mimeType: resource.file.mimeType,
                    name: resource.file.name,
                    size: resource.file.size
                  }
                }
              : undefined
          }))
        }

        // Additional fields can be added if needed
      }
    });

    return result;
  }

  async getClaimById(id: string): Promise<ClaimWithResources | null> {
    return await this.prisma.claim.findUnique({
      where: { id: id },
      include: {
        resources: {
          include: {
            file: true
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
        id: resourceId,
        claimId: claimId
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
        description: resource.description,
        createdBy: userId,
        file: {
          create: {
            key: resource.file.key,
            md5: resource.file.md5,
            mimeType: resource.file.mimeType,
            name: resource.file.name,
            size: resource.file.size,
            createdBy: userId
          }
        }
      }
    });
  }

  async deleteClaimById(id: string): Promise<Claim> {
    return this.prisma.claim.delete({ where: { id: id } });
  }

  async getFileByIds(claimId: string, fileId: string): Promise<File | null> {
    return this.prisma.file.findFirst({
      where: {
        id: fileId,
        claimResource: {
          every: {
            claimId: claimId
          }
        }
      }
    });
  }
}
