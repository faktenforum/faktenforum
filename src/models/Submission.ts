import { Property, Required } from "@tsed/schema";

export class SubmissionResponse {
  @Property()
  @Required()
  token: string;
}
