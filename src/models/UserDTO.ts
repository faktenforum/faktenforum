import { UserRole } from "@prisma/client";
import type { UserRole as UserRoleType } from "@prisma/client";
import { Enum, Format, Optional, Property, Required } from "@tsed/schema";
import { PasswordFormatDecorator } from "~/decorators";

export class UserUpdateDTO {
  @Property()
  @Optional()
  @Format("email")
  email: string;

  @Property()
  @Optional()
  @Enum(UserRole)
  role: UserRoleType;
}

export class UserCreateDTO {
  @Property()
  @Required()
  @Format("email")
  email: string;

  @Property()
  @Required()
  @PasswordFormatDecorator()
  password: string;

  @Property()
  @Required()
  @Enum(UserRole)
  role: UserRoleType;
}

export class UserDTO {
  @Property()
  @Required()
  id: string;

  @Property()
  @Required()
  email: string;

  @Property()
  @Required()
  @Enum(UserRole)
  role: UserRoleType;

  @Property()
  @Required()
  createdAt: Date;

  @Property()
  @Required()
  updatedAt: Date;
}
