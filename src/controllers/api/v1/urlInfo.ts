import { Controller } from "@tsed/di";
import { BadRequest, NotFound } from "@tsed/exceptions";
import { PathParams } from "@tsed/platform-params";
import { ContentType, Get, Returns } from "@tsed/schema";
import getMetaData from "metadata-scraper";
import { UrlInfoResponse } from "~/models/responses/UrlInfoResponse";

@Controller("/url-info")
export class UrlInfoController {
  @Get("/:url")
  @Returns(400)
  @Returns(404)
  @Returns(200, UrlInfoResponse)
  @ContentType("application/json")
  async getUrlInfo(@PathParams("url") url: string) {
    const schemaMatch = url.match(/^(.*):\/\//);
    if (!schemaMatch) {
      url = `http://${url}`;
    } else if (!["http://", "https://"].includes(schemaMatch[0])) {
      throw new BadRequest("Invalid URL: Unsupported schema schema");
    }
    try {
      return await getMetaData(url);
    } catch (e) {
      switch (e.code) {
        case "ENOTFOUND":
          return new BadRequest("Invalid URL: Unable to resolve");

        case "ERR_INVALID_URL":
          return new BadRequest("Invalid URL: URL is malformed");

        case "ERR_NON_2XX_3XX_RESPONSE":
          if (e.response.statusCode === 404) {
            return new NotFound("Invalid URL: Resource not found");
          }
          throw e;

        default:
          throw e;
      }
    }
  }
}
