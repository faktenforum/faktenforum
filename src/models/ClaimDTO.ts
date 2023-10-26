import { UserRole } from "@prisma/client";
import type { UserRole as UserRoleType } from "@prisma/client";
import { Enum, Format, Optional, Property, Required } from "@tsed/schema";
import { PasswordFormatDecorator } from "~/decorators";

export class ClaimCreateDTO {
  @Property()
  @Optional()
  title: string;
  @Property()
  @Optional()
  description: string;
}

export class ClaimDTO {
  @Property()
  @Required()
  id: string;

  @Property()
  @Required()
  title: string;

  @Property()
  @Required()
  description: string;

  @Property()
  @Required()
  createdAt: Date;

  @Property()
  @Required()
  updatedAt: Date;
}
