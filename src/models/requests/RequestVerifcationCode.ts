import { Property, Required } from "@tsed/schema";

export class RequestVerifcationCodeRequest {
  @Property()
  @Required()
  email: string;
}
