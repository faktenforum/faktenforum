import { ArrayOf, Optional, Property, Required } from "@tsed/schema";

export class ClaimFileCreateDTO {
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
export class ClaimFileDTO extends ClaimFileCreateDTO {
  @Property()
  @Optional()
  url: string;
}

export class ClaimResourceCreateDTO {
  @Property()
  @Optional()
  originalUrl: string;

  @Property()
  @Optional()
  @ArrayOf(ClaimFileCreateDTO)
  files: ClaimFileCreateDTO[];
}

export class ClaimResourceDTO extends ClaimResourceCreateDTO {
  @Property()
  @Optional()
  id: string;

  @Property()
  @Optional()
  @ArrayOf(ClaimFileDTO)
  declare files: ClaimFileDTO[];
}

export class ClaimCreateDTO {
  @Property()
  @Optional()
  title: string;
  @Property()
  @Optional()
  description: string;

  @Property()
  @ArrayOf(ClaimResourceDTO)
  resources: ClaimResourceDTO[];
}

export class ClaimDTO extends ClaimCreateDTO {
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
