import { Controller } from "@tsed/di";
import { Get, Returns } from "@tsed/schema";
import { VersionResponse } from "~/models/responses/VersionResponse";
const packageJSON = require("../../../../package.json"); // adjust the path as necessary

@Controller("/version")
export class VersionController {
  @Get()
  @Returns(200, VersionResponse).ContentType("*/*").Description("File content")
  async getVersion() {
    return {
      version: packageJSON.version
    };
  }
}
