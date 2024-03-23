import { Maximum, Minimum, ArrayOf, Optional, Property, Required } from "@tsed/schema";

export class ClaimQueryParams {
  @Property()
  @Minimum(1)
  page: number = 1;

  @Property()
  @Minimum(1)
  @Maximum(100)
  pageSize: number = 10;

  @Property()
  sortOrder: "asc" | "desc" = "asc";

  @Property()
  search: string = "";
}
export class ClaimFileCreateDTO {
  @Property()
  @Required()
  name: string;

  @Property()
  @Required()
  size: number;

  @Property()
  @Required()
  key: string;

  @Property()
  @Required()
  md5: string;

  @Property()
  @Required()
  mimeType: string;
}
export class ClaimFileDTO extends ClaimFileCreateDTO {
  @Property()
  @Required()
  id: string;

  @Property()
  @Optional()
  createdBy: string;

  @Property()
  createdAt: string;

  @Property()
  updatedAt: string;

  @Property()
  @Optional()
  transcription: string;

  @Property()
  @Required()
  claimResourceId: string;
}

export class ClaimResourceCreateDTO {
  @Property()
  @Optional()
  originalUrl: string;

  @Property()
  @Optional()
  description: string;

  @Property()
  @Optional()
  file: ClaimFileCreateDTO;
}

export class ClaimResourceDTO extends ClaimResourceCreateDTO {
  @Property()
  @Required()
  id: string;
  @Property()
  @Required()
  claimId: string;
  @Property()
  @Optional()
  createdBy: null;
  @Property()
  createdAt: string;
  @Property()
  updatedAt: string;
  @Property()
  @Required()
  declare file: ClaimFileDTO;

  @Property()
  @Optional()
  url: string;
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
  @Required()
  resources: ClaimResourceDTO[];
}

export class ClaimDTO extends ClaimCreateDTO {
  @Property()
  @Required()
  id: string;

  @Optional()
  createdBy: null;

  @Property()
  createdAt: string;

  @Property()
  updatedAt: string;
}

export class ClaimWithResources extends ClaimDTO {
  @Property()
  @Required()
  declare resources: ClaimResourceDTO[];
}
