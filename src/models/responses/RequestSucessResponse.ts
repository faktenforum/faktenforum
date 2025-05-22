import { Property, Required } from "@tsed/schema";

export class RequestSuccessResponse {
  @Property()
  @Required()
  success: boolean;

  @Property()
  error?: string;
}
