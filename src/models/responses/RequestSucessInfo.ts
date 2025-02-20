import { Property, Required } from "@tsed/schema";

export class RequestSucessInfo {
  @Property()
  @Required()
  success: boolean;
}
