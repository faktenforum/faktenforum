import { ArrayOf, Optional, Property, Required } from "@tsed/schema";

export class SubmissionResponse {
  @Property()
  @Required()
  token: string;
}

export class SubmissionFileCreateDTO {
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
export class SubmissionFileDTO extends SubmissionFileCreateDTO {
  @Property()
  @Optional()
  url: string;
}

export class SubmissionResourceCreateDTO {
  @Property()
  @Optional()
  originalUrl: string;

  @Property()
  @Optional()
  @ArrayOf(SubmissionFileCreateDTO)
  files: SubmissionFileCreateDTO[];
}

export class SubmissionResourceDTO extends SubmissionResourceCreateDTO {
  @Property()
  @Optional()
  id: string;

  @Property()
  @Optional()
  @ArrayOf(SubmissionFileDTO)
  declare files: SubmissionFileDTO[];
}

export class SubmissionCreateDTO {
  @Property()
  @Optional()
  title: string;
  @Property()
  @Optional()
  description: string;

  @Property()
  @ArrayOf(SubmissionResourceDTO)
  resources: SubmissionResourceDTO[];
}

export class SubmissionDTO extends SubmissionCreateDTO {
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
