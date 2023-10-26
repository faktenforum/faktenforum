import { UserRole } from "@prisma/client";
import type { UserRole as UserRoleType } from "@prisma/client";
import { ArrayOf, Enum, Format, Optional, Property, Required } from "@tsed/schema";
import { PasswordFormatDecorator } from "~/decorators";

class ClaimResourceDTO {
  @Property()
  @Optional()
  id: string;

  @Property()
  @Optional()
  originalUrl: string;

  @Property()
  @Optional()
  @ArrayOf(String)
  files: string[];
}

export class ClaimCreateDTO {
  @Property()
  @Optional()
  title: string;
  @Property()
  @Optional()
  description: string;

  @Property()
  @Optional()
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
