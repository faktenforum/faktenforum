import { Claim, File, ClaimResource, PrismaClient } from "@prisma/client";
import { Service } from "@tsed/di";
import { ClaimResourceCreate } from "~/models/Claim";

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
  ClaimResource: Array<ClaimResource & { File: File | undefined | null }>;
};

@Service()
export class ClaimService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createClaim(claimData: ClaimCreateDM, userId?: string): Promise<Claim> {
    const { title, description, resources } = claimData;
    console.log("Claim Data:", JSON.stringify(claimData, null, 2));

    // Start a transaction
    const result = await this.prisma.claim.create({
      data: {
        title: title,
        description: description,
        ClaimResource: {
          create: resources.map((resource) => ({
            createdBy: userId,
            originalUrl: resource.originalUrl,
            File: resource.File
              ? {
                  create: {
                    createdBy: userId,
                    key: resource.File.key,
                    md5: resource.File.md5,
                    mimeType: resource.File.mimeType,
                    name: resource.File.name,
                    size: resource.File.size
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
        ClaimResource: {
          include: {
            File: true
          }
        }
      }
    });
  }

  async updateClaimById(id: string, data: Partial<Claim>): Promise<Claim> {
    console.log(data);
    console.log(id);
    return this.prisma.claim.update({
      where: { id: id },
      data: { title: "NEW TITLE" }
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
    resource: Partial<ClaimResourceCreate>,
    userId?: string
  ): Promise<ClaimResource> {
    console.log("resource", JSON.stringify(resource));
    console.log("userId", userId);
    let dbfile;
    if (resource.file) {
      dbfile = await this.prisma.file.create({
        data: {
          createdBy: userId,
          key: resource.file.key,
          md5: resource.file.md5,
          mimeType: resource.file.mimeType,
          name: resource.file.name,
          size: resource.file.size
        }
      });
    }
    return this.prisma.claimResource.create({
      include: {
        File: !!resource.file
      },
      data: {
        claimId: claimId,
        createdBy: userId,
        originalUrl: resource.originalUrl,
        fileId: dbfile?.id
      }
    });
  }

  async deleteClaimById(id: string): Promise<Claim> {
    return this.prisma.claim.delete({ where: { id: id } });
  }
}
