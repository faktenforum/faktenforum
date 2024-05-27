import { Property, Required } from "@tsed/schema";

export class SubmissionCreateResponse {
  @Property()
  @Required()
  token: string;
}
