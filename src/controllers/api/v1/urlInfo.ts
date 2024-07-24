import { Controller } from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import { Get, Returns } from "@tsed/schema";
import getMetaData from "metadata-scraper";
import { UrlInfoResponse } from "~/models/responses/UrlInfoResponse";

@Controller("/url-info")
export class UrlInfoController {
  @Get("/:url")
  @Returns(200, UrlInfoResponse).ContentType("application/json")
  async getUrlInfo(@PathParams("url") url: string) {
    return getMetaData(url);
  }
}
