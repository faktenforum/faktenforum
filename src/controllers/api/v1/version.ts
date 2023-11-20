import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";
import { version } from "../../../../package.json"; // adjust the path as necessary

@Controller("/version")
export class VersionController {
  @Get()
  async getVersion() {
    return {
      version
    };
  }
}
