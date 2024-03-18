import { Controller, Inject } from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import { QueryParams } from "@tsed/platform-params";
import { Get, Returns } from "@tsed/schema";
import { NotFound } from "@tsed/exceptions";
import { Next, Res } from "@tsed/common";
import { AccessControlDecorator } from "~/decorators";
import { ClaimQueryParams, ClaimWithResources, Pagination } from "~/models";
import { ClaimService, FileService } from "~/services";

@Controller("/claims")
export class ClaimsController {
  @Inject()
  claimService: ClaimService;
  @Inject()
  fileService: FileService;

  @AccessControlDecorator({ role: "ALL" })
  @Get()
  @Returns(200, Pagination).Of(ClaimWithResources)
  async getClaims(@QueryParams() params: ClaimQueryParams) {
    const claims = await this.claimService.getClaims(params);
    claims.data.forEach((claim) => {
      claim.resources.forEach(() => {});
    });

    return claims;
  }
  @AccessControlDecorator({ role: "ADMIN" })
  @Get("/:id")
  @Returns(200, ClaimWithResources)
  async getClaim(@PathParams("id") id: string) {
    const claim = await this.claimService.getClaimById(id);
    // Transform file urls

    return claim;
  }

  @Get("/:claimId/files/:fileId")
  @Returns(200, String).ContentType("*/*").Description("File content") // S
  async getSubmissionFile(
    @PathParams("claimId") claimId: string,
    @PathParams("fileId") fileId: string,
    @Res() response: Response & { set: (object: unknown) => void },
    @Next() next: (error: unknown) => void
  ) {
    try {
      const claimFile = await this.claimService.getClaimFileByIds(claimId, fileId);
      if (!claimFile) {
        throw new NotFound("ClaimFile not found");
      }
      const stream = await this.fileService.getFileStream(claimFile.key);
      response.set({
        "Content-Type": claimFile.mimeType // or the appropriate MIME type
        // "Content-Disposition": `attachment; filename="${claimFile.name}"` // if you want it to be downloaded
      });

      stream.pipe(response as never); //pipe the file to the response
    } catch (error) {
      next(error); // Pass errors to Express.
    }
  }
}
