import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";
const packageJSON = require("../../../../package.json"); // adjust the path as necessary

@Controller("/version")
export class VersionController {
  @Get()
  
  async getVersion() {
    return {
      version: packageJSON.version
    };
  }
}
