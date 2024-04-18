import { claim, file, claim_resource, PrismaClient } from "@prisma/client";
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
type ClaimWithResources = claim & {
  claim_resource: Array<claim_resource & { file: file | undefined | null }>;
};

@Service()
export class ClaimService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createClaim(claimData: ClaimCreateDM, userId?: string): Promise<claim> {
    const { title, description, resources } = claimData;
    console.log("Claim Data:", JSON.stringify(claimData, null, 2));

    // Start a transaction
    const result = await this.prisma.claim.create({
      data: {
        title: title,
        description: description,
        claim_resource: {
          create: resources.map((resource) => ({
            created_by: userId,
            original_url: resource.originalUrl,
            file: resource.file
              ? {
                  create: {
                    created_by: userId,
                    key: resource.file.key,
                    md5: resource.file.md5,
                    mime_type: resource.file.mimeType,
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
        claim_resource: {
          include: {
            file: true
          }
        }
      }
    });
  }

  async updateClaimById(id: string, data: Partial<claim>): Promise<claim> {
    console.log(data);
    console.log(id);
    return this.prisma.claim.update({
      where: { id: id },
      data
    });
  }

  async updateClaimResourceById(
    claimId: string,
    resourceId: string,
    data: Partial<claim_resource>
  ): Promise<claim_resource> {
    return this.prisma.claim_resource.update({
      where: {
        id: resourceId,
        claim_id: claimId
      },
      data
    });
  }

  async createClaimResource(
    claimId: string,
    resource: Partial<ClaimResourceCreate>,
    userId?: string
  ): Promise<claim_resource> {
    console.log("resource", JSON.stringify(resource));
    console.log("userId", userId);
    let dbfile;
    if (resource.file) {
      dbfile = await this.prisma.file.create({
        data: {
          created_by: userId,
          key: resource.file.key,
          md5: resource.file.md5,
          mime_type: resource.file.mimeType,
          name: resource.file.name,
          size: resource.file.size
        }
      });
    }
    return this.prisma.claim_resource.create({
      include: {
        file: !!resource.file
      },
      data: {
        claim_id: claimId,
        created_by: userId,
        original_url: resource.originalUrl,
        file_id: dbfile?.id
      }
    });
  }

  async deleteClaimById(id: string): Promise<claim> {
    return this.prisma.claim.delete({ where: { id: id } });
  }
}
