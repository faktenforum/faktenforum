import dns from "node:dns/promises";
import { Injectable } from "@tsed/di";
import { UseCache } from "@tsed/platform-cache";
import getMetaData, { type MetaData } from "metadata-scraper";
import isReservedIp from "reserved-ip";

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
  async get(address: string): Promise<UrlInfoResult> {
    if (!address) {
      return { ok: false, status: 400, message: "URL missing" };
    }

    const schemaMatch = address.match(/^(.*):\/\//);
    if (!schemaMatch) {
      address = `http://${address}`;
    } else if (!["http://", "https://"].includes(schemaMatch[0])) {
      return { ok: false, status: 400, message: "Invalid URL: Unsupported schema" };
    }

    try {
      const url = new URL(address);
      const ipv4 = await dns.resolve4(url.hostname);
      const ipv6 = await dns.resolve6(url.hostname);
      if (ipv4.some(isReservedIp) || ipv6.some(isReservedIp)) {
        return { ok: false, status: 400, message: "Invalid URL: Resolved to reserved IP" };
      }
    } catch {
      return { ok: false, status: 400, message: "Invalid URL: Unable to resolve" };
    }

    try {
      return { ok: true, info: await getMetaData(address) };
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
