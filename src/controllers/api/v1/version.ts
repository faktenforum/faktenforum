import { Controller } from "@tsed/di";
import { Get, Returns, Tags, Description } from "@tsed/schema";
import { VersionResponse } from "~/models/responses/VersionResponse";
import packageJSON from "../../../../package.json"; // Adjust the path as necessary

@Controller("/version")
@Tags("Tools")
@Description("Endpoint to get the version of the platform")
export class VersionController {
  @Get()
  @(Returns(200, VersionResponse).ContentType("*/*").Description("File content")) // prettier-ignore
  async getVersion() {
    return {
      version: packageJSON.version
    };
  }
}
