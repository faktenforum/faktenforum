import { UserRole } from "@prisma/client";
import type { UserRole as UserRoleType } from "@prisma/client";
import { ArrayOf, Enum, Format, Optional, Property, Required } from "@tsed/schema";
import { PasswordFormatDecorator } from "~/decorators";

export class ClaimFileDTO {
  @Property()
  @Optional()
  name: string;

  @Property()
  url: string;

  @Property()
  @Optional()
  size: number;

  @Property()
  @Optional()
  key: number;

  @Property()
  @Optional()
  md5: number;

  @Property()
  @Optional()
  mimeType: number;
}

export class ClaimResourceCreateDTO {
  @Property()
  @Optional()
  originalUrl: string;

  @Property()
  @Optional()
  @ArrayOf(ClaimFileDTO)
  files: ClaimFileDTO[];
}

export class ClaimResourceDTO extends ClaimResourceCreateDTO{
  @Property()
  @Optional()
  id: string;
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
