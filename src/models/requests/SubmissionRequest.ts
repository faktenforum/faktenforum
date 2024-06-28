import { ArrayOf, Optional, Property } from "@tsed/schema";
export class SubmissionOrigin {
  @Property()
  @Optional()
  url: string;

  @Property()
  @Optional()
  fileIndex: number;
}

export class SubmissionRequest {
  @Property()
  @Optional()
  notes: string;

  @Property()
  @ArrayOf(SubmissionOrigin)
  origins: SubmissionOrigin[];
}
