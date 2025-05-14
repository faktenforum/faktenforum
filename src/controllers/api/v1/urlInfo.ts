import { Controller, Get, Inject } from "@tsed/common";
import { Exception } from "@tsed/exceptions";
import { QueryParams } from "@tsed/platform-params";
import { ContentType, Returns, Tags, Description } from "@tsed/schema";
import { UrlInfoResponse } from "~/models/responses/UrlInfoResponse";
import { UrlInfoService } from "~/services";

@Controller("/url-info")
@Tags("Tools")
@Description("Endpoint to get information about a url, it loads favicon and socile media OG metadata")
export class UrlInfoController {
  @Inject(UrlInfoService)
  urlInfo: UrlInfoService;

  @Get()
  @Returns(400)
  @Returns(404)
  @Returns(200, UrlInfoResponse)
  @ContentType("application/json")
  async getUrlInfo(@QueryParams("url") url: string = "") {
    const result = await this.urlInfo.get(url);
    if (result.ok) {
      return result.info;
    }

    throw new Exception(result.status, result.message);
  }
}
