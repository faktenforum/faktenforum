import { Injectable } from "@tsed/di";
import { UseCache } from "@tsed/platform-cache";
import getMetaData, { type MetaData } from "metadata-scraper";

type UrlInfoResult =
  | {
      ok: true;
      info: MetaData;
    }
  | {
      ok: false;
      status: 400 | 404;
      message: string;
    };

@Injectable()
export class UrlInfoService {
  @UseCache({ ttl: 24 * 60 * 60 })
  async get(url: string): Promise<UrlInfoResult> {
    const schemaMatch = url.match(/^(.*):\/\//);
    if (!schemaMatch) {
      url = `http://${url}`;
    } else if (!["http://", "https://"].includes(schemaMatch[0])) {
      return { ok: false, status: 400, message: "Invalid URL: Unsupported schema schema" };
    }
    if (/^https?:\/\/(localhost|\d+\.\d+\.\d+\.\d+)/.test(url)) {
      // TODO add more prohibited domains, like docker containers hostnames
      return { ok: false, status: 400, message: "Invalid URL: Cannot get information for IPs and localhost" };
    }
    try {
      return { ok: true, info: await getMetaData(url) };
    } catch (e) {
      switch (e.code) {
        case "ENOTFOUND":
          return { ok: false, status: 400, message: "Invalid URL: Unable to resolve" };

        case "ERR_INVALID_URL":
          return { ok: false, status: 400, message: "Invalid URL: URL is malformed" };

        case "ERR_NON_2XX_3XX_RESPONSE":
          if (e.response.statusCode === 404) {
            return { ok: false, status: 404, message: "Invalid URL: Resource not found" };
          }
          throw e;

        default:
          throw e;
      }
    }
  }
}
