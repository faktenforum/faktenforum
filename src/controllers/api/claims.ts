import { Controller } from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import { Get } from "@tsed/schema";
import prisma from "src";
import { AccessControlDecorator } from "~/decorators";

@Controller("/claims")
export class ClaimsController {
  @AccessControlDecorator({ role: "ADMIN" })
  @Get()
  async getClaims() {
    const claims = await prisma.claim.findMany({
      include: {
        resources: true
      }
    });
    return claims;
  }
  @AccessControlDecorator({ role: "ADMIN" })
  @Get("/:id")
  async getClaim(@PathParams("id") id: string) {
    const claim = await prisma.claim.findUnique({ where: { id: id } });
    return claim;
  }
}
