import { PrismaClient, Session, User, UserRole } from "@prisma/client";
import { Agenda, Define, Every } from "@tsed/agenda";
import { Inject, Service } from "@tsed/di";
import { Forbidden, NotFound } from "@tsed/exceptions";
import { Job } from "agenda";
import crypto from "crypto";
import { ClaimDTO, CreateClaimDTO } from "~/models/ClaimDTO";
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

  async submitClaim(claim: CreateClaimDTO) {
    const { id: claimId } = await this.claimService.createClaim(claim);

    const expiration = new Date();
    expiration.setSeconds(
      expiration.getSeconds() + timeStringToSeconds(this.envService.claimSubmissionTokenLifeTime)
    );

    const { token } = await this.prisma.claimSubmissionToken.create({
      data: {
        token: this.authService.generateRandomToken(),
        expiresAt: expiration,
        claimId
      }
    });
    return { claimId, token };
  }

  async getClaimIdByToken(token: string): Promise<string> {
    const claimSubmissionToken = await this.prisma.claimSubmissionToken.findUnique({
      where: { token }
    });
    if (!claimSubmissionToken) throw new NotFound("Claim submission token not found");
    return claimSubmissionToken.claimId;
  }
}
