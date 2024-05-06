import { PrismaClient, user } from "@prisma/client";
import { Agenda, Every } from "@tsed/agenda";
import { Inject, Service } from "@tsed/di";
import { BadRequest, NotFound } from "@tsed/exceptions";

import crypto from "crypto";
import { S3MulterFile } from "~/config/minio";
import { Submission, SubmissionCreate } from "~/models";
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

  async getAllUsers(): Promise<user[]> {
    return this.prisma.user.findMany();
  }
  @Every("5 minutes", {
    name: "Delete expired sessions"
  })
  async deleteExpiredClaimSubmissionTokens() {
    await this.prisma.claim_submission_token.deleteMany({
      where: {
        expires_at: {
          lte: new Date()
        }
      }
    });
  }

  async endSubmission(token: string) {
    const claimId = await this.getClaimIdByToken(token);
    await this.prisma.claim_submission_token.delete({
      where: { token }
    });
    return claimId;
  }

  async submitClaim(claim: SubmissionCreate, files: S3MulterFile[], userId?: string) {
    const rawToken = crypto.randomBytes(24).toString("hex");
    const dbData = {
      title: claim.title,
      description: claim.description,
      resources: claim.resources.map((resource) => {
        if (!resource.file) {
          return {
            originalUrl: resource.originalUrl
          };
        }
        if (resource.file.url.startsWith("file-")) {
          const index = parseInt(resource.file.url.substring(5));
          const file = files[index];

          const claimFile = {
            id: file.key,
            mimeType: file.mimetype,
            eTag: file.etag.replace(/"/g, ""),
            name: file.metadata.originalName,
            size: file.size
          };

          return {
            originalUrl: resource.originalUrl,
            file: claimFile
          };
        } else {
          throw new BadRequest("Invalid file URL");
        }
      })
    };
    const { id: claimId } = await this.claimService.createClaim(dbData, userId);

    const expiration = new Date();
    expiration.setSeconds(
      expiration.getSeconds() + timeStringToSeconds(this.envService.claimSubmissionTokenLifeTime)
    );

    const { token } = await this.prisma.claim_submission_token.create({
      data: {
        token: rawToken,
        expires_at: expiration,
        claim_id: claimId
      }
    });
    return { claimId, token };
  }

  async updateSubmissionById(id: string, data: Partial<Submission>, files: S3MulterFile[]) {
    const claim = await this.claimService.getClaimById(id);
    if (!claim) throw new NotFound("Claim not found");
    // update claim data
    await this.claimService.updateClaimById(id, { title: data.title, description: data.description });
    console.log("data.resources", data.resources);
    await Promise.all(
      (data.resources || []).map((resource) => {
        if (resource.id) {
          // update existing resource
          return this.claimService.updateClaimResourceById(id, resource.id, {
            original_url: resource.originalUrl
          });
        } else {
          // create new resource
          let claimFile;
          if (resource.file && resource.file.url.startsWith("file-")) {
            const index = parseInt(resource.file.url.substring(5));
            const file = files[index];

            claimFile = {
              id: file.key,
              mimeType: file.mimetype,
              eTag: file.etag.replace(/"/g, ""),
              name: file.metadata.originalName,
              size: file.size
            };

            console.log("Claim File: ", JSON.stringify(claimFile));
          }
          const resourceDbData = {
            originalUrl: resource.originalUrl,
            file: claimFile
          };
          return this.claimService.createClaimResource(id, resourceDbData);
        }
      })
    );
  }

  async getClaimIdByToken(token: string): Promise<string> {
    const claim_submission_token = await this.prisma.claim_submission_token.findUnique({
      where: { token }
    });
    if (!claim_submission_token) throw new NotFound("Claim submission token not found");
    return claim_submission_token.claim_id;
  }
}
