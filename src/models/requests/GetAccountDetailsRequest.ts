import { Property, Required, ArrayOf } from "@tsed/schema";

export class GetAccountsDetailsRequest {
  @Property()
  @Required()
  @ArrayOf(String)
  ids: string[];
}
