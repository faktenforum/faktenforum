import { Property, Required } from "@tsed/schema";

export class ClaimWorthinessRequest {
  @Property()
  @Required()
  text: string;
}
