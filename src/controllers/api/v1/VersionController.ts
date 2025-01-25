import { Controller } from "@tsed/di";
import { Get, Returns } from "@tsed/schema";
import { VersionResponse } from "~/models/responses/VersionResponse";
import packageJSON from "../../../../package.json"; // Adjust the path as necessary

@Controller("/version")
export class VersionController {
  @Get()
  @(Returns(200, VersionResponse).ContentType("*/*").Description("File content")) // prettier-ignore
  async getVersion() {
    return {
      version: packageJSON.version
    };
  }
}
