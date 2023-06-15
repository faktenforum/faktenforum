import { Controller } from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import { Get } from "@tsed/schema";
import prisma from "src";

@Controller("/claims")
export class ClaimsController {
  @Get()
  async getClaims() {
    const claims = await prisma.claim.findMany();
    return claims;
  }

  @Get("/:id")
  async getClaim(@PathParams("id") id: string) {
    const claim = await prisma.claim.findUnique({ where: { id: id } });
    return claim;
  }
}
