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
export class ClaimFileCreate {
  @Property()
  @Required()
  name: string;

  @Property()
  @Required()
  size: number;

  @Property()
  @Required()
  id: string;

  @Property()
  @Required()
  eTag: string;

  @Property()
  @Required()
  mimeType: string;
}
export class ClaimFile extends ClaimFileCreate {
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

export class ClaimResourceCreate {
  @Property()
  @Optional()
  originalUrl: string;

  @Property()
  @Optional()
  description: string;

  @Property()
  @Optional()
  file: ClaimFileCreate;
}

export class ClaimResource extends ClaimResourceCreate {
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
  declare file: ClaimFile;

  @Property()
  @Optional()
  url: string;
}

export class ClaimCreate {
  @Property()
  @Optional()
  title: string;
  @Property()
  @Optional()
  description: string;

  @Property()
  @ArrayOf(ClaimResource)
  @Required()
  resources: ClaimResource[];
}

export class Claim extends ClaimCreate {
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

export class ClaimWithResources extends Claim {
  @Property()
  @Required()
  declare resources: ClaimResource[];
}
