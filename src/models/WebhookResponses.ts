import { Property, Required } from "@tsed/schema";

export class SessionResponse {
  @Property()
  @Required()
  "X-Hasura-User-Id": string;

  @Property()
  @Required()
  "X-Hasura-Role": string;

  @Property()
  @Required()
  "Cache-Control": string;

  @Property()
  @Required()
  "Mon, 30 Mar 2026 13:25:18 GMT": string;
}
