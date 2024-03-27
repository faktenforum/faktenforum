import { ArrayOf, Optional, Property, Required } from "@tsed/schema";

export class SubmissionFileCreate {
  @Property()
  @Optional()
  name: string;

  @Property()
  @Optional()
  size: number;

  @Property()
  @Optional()
  key: string;

  @Property()
  @Optional()
  md5: string;

  @Property()
  @Optional()
  mimeType: string;
}
export class SubmissionFile extends SubmissionFileCreate {
  @Property()
  @Optional()
  url: string;
}

export class SubmissionResourceCreate {
  @Property()
  @Optional()
  originalUrl: string;

  @Property()
  @Optional()
  file: SubmissionFileCreate;
}

export class SubmissionResource extends SubmissionResourceCreate {
  @Property()
  @Optional()
  id: string;

  @Property()
  @Optional()
  declare file: SubmissionFile;
}

export class SubmissionCreate {
  @Property()
  @Optional()
  title: string;
  @Property()
  @Optional()
  description: string;

  @Property()
  @ArrayOf(SubmissionResource)
  resources: SubmissionResource[];
}

export class Submission extends SubmissionCreate {
  @Property()
  @Required()
  id: string;

  @Property()
  @Required()
  createdAt: Date;

  @Property()
  @Required()
  updatedAt: Date;
}
