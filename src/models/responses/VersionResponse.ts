import { Property, Required } from "@tsed/schema";

export class VersionResponse {
  @Property()
  @Required()
  version: string;
}
