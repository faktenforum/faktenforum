import { OnSerialize } from "@tsed/json-mapper";
import { Property, Required } from "@tsed/schema";

export class SessionResponse {
  @Property()
  @Required()
  "X-Hasura-User-Id": string;

  @Property()
  @Required()
  "XHasuraRole": string;

  @Property()
  @Required()
  "CacheControl": string;

  @Property()
  @Required()
  "Expires": string;
}
