import { PrismaClient, Session, User, UserRole } from "@prisma/client";
import { Agenda, Define, Every } from "@tsed/agenda";
import { Inject, Service } from "@tsed/di";
import { BadRequest, Forbidden, NotFound } from "@tsed/exceptions";
import { Job } from "agenda";
import crypto from "crypto";
import { S3MulterFile } from "~/config/minio";
import { ClaimCreateDTO, ClaimDTO } from "~/models/ClaimDTO";
import { AuthService, ClaimService, EnvService } from "~/services";
import { timeStringToSeconds } from "~/utils";

@Service()
@Agenda({ namespace: "submission" })
export class SubmissionService {
  @Inject()
  envService: EnvService;

  @Inject()
  claimService: ClaimService;

  @Inject()
  authService: AuthService;

  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
  @Every("5 minutes", {
    name: "Delete expired sessions"
  })
  async deleteExpiredClaimSubmissionTokens(job: Job) {
    await this.prisma.claimSubmissionToken.deleteMany({
      where: {
        expiresAt: {
          lte: new Date()
        }
      }
    });
  }

  async submitClaim(claim: ClaimCreateDTO, files: S3MulterFile[], userId?: string) {
    const rawToken = crypto.randomBytes(24).toString("hex");
    const dbData = {
      title: claim.title,
      description: claim.description,
      resources: claim.resources.map((resource) => ({
        originalUrl: resource.originalUrl,
        files: resource.files.map((claimFile) => {
          if (claimFile.url.startsWith("file-")) {
            const index = parseInt(claimFile.url.substring(5));
            const file = files[index];

            return {
              key: file.key,
              mimeType: file.mimetype,
              md5: file.etag.replace(/"/g, ""),
              name: file.metadata.originalName,
              size: file.size
            };
          } else {
            throw new BadRequest("Invalid file URL");
          }
        })
      }))
    };
    const { id: claimId } = await this.claimService.createClaim(dbData, userId);

    const expiration = new Date();
    expiration.setSeconds(
      expiration.getSeconds() + timeStringToSeconds(this.envService.claimSubmissionTokenLifeTime)
    );

    const { token } = await this.prisma.claimSubmissionToken.create({
      data: {
        token: rawToken,
        expiresAt: expiration,
        claimId
      }
    });
    return { claimId, token };
  }

  async updateSubmissionById(id: string, data: ClaimCreateDTO, files: S3MulterFile[], userId?: string) {
    console.log()
    const claim = await this.claimService.getClaimById(id);
    if(!claim) throw new NotFound("Claim not found");
    // update claim data
    await this.claimService.updateClaimById(id, { title: data.title, description: data.description });
    
    console.log('data', JSON.stringify(data, null, 3))
    await Promise.all(data.resources.map((resource) => {
      if (resource.id) {
        // update existing resource
        return this.claimService.updateClaimResourceById(id, resource.id, { originalUrl: resource.originalUrl});
      } else {
        // create new resource
        const resourceDbData = 
          {
            originalUrl: resource.originalUrl,
            files: resource.files.map((claimFile) => {
              if (claimFile.url.startsWith("file-")) {
                const index = parseInt(claimFile.url.substring(5));
                const file = files[index];
    
                return {
                  key: file.key,
                  mimeType: file.mimetype,
                  md5: file.etag.replace(/"/g, ""),
                  name: file.metadata.originalName,
                  size: file.size
                };
              }
            })
          }
          return this.claimService.createClaimResource(id, resourceDbData)
      }
      
    }));
    
  }

  async getClaimIdByToken(token: string): Promise<string> {
    const claimSubmissionToken = await this.prisma.claimSubmissionToken.findUnique({
      where: { token }
    });
    if (!claimSubmissionToken) throw new NotFound("Claim submission token not found");
    return claimSubmissionToken.claimId;
  }
}
