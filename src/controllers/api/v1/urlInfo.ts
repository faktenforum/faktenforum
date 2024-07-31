import { Controller, Get, Inject } from "@tsed/common";
import { Exception } from "@tsed/exceptions";
import { PathParams } from "@tsed/platform-params";
import { ContentType, Returns } from "@tsed/schema";
import { UrlInfoResponse } from "~/models/responses/UrlInfoResponse";
import { UrlInfoService } from "~/services";

@Controller("/url-info")
export class UrlInfoController {
  @Inject(UrlInfoService)
  urlInfo: UrlInfoService;

  @Get("/:url")
  @Returns(400)
  @Returns(404)
  @Returns(200, UrlInfoResponse)
  @ContentType("application/json")
  async getUrlInfo(@PathParams("url") url: string) {
    const result = await this.urlInfo.get(url);
    if (result.ok) {
      return result.info;
    }

    throw new Exception(result.status, result.message);
  }
}
