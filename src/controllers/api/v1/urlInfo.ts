import { Controller } from "@tsed/di";
import { BadRequest } from "@tsed/exceptions";
import { PathParams } from "@tsed/platform-params";
import { Get, Returns } from "@tsed/schema";
import getMetaData from "metadata-scraper";
import { UrlInfoResponse } from "~/models/responses/UrlInfoResponse";

@Controller("/url-info")
export class UrlInfoController {
  @Get("/:url")
  @Returns(200, UrlInfoResponse).ContentType("application/json")
  async getUrlInfo(@PathParams("url") url: string) {
    const schemaMatch = url.match(/^(.*):\/\//);
    if (!schemaMatch) {
      url = `http://${url}`;
    } else if (!["http://", "https://"].includes(schemaMatch[0])) {
      throw new BadRequest("URL contains unsupported schema");
    }
    return getMetaData(url);
  }
}
