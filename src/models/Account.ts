import { Format, Optional, Property, Required } from "@tsed/schema";
import { PasswordFormatDecorator } from "~/decorators";

export class Session {
  @Property()
  @Required()
  id: string;

  @Property()
  @Optional()
  userAgent: string | null;

  @Format("date-time")
  @Required()
  expiresAt: Date;

  @Format("date-time")
  @Required()
  createdAt: Date;

  @Format("date-time")
  @Required()
  updatedAt: Date;
}
export class AccountInfo {
  @Property()
  id: string;
  @Property()
  @Format("email")
  email: string;

  @Property()
  role: string;

  @Property()
  access_token: string;

  @Property()
  access_token_expires_in: number;

  // @Property()
  // refresh_token: string;#
  // @Property()
  // refresh_token_expires_in: number;
}

export class Email {
  @Property()
  @Format("email")
  email: string;
}

export class PasswordUpdate {
  @Property()
  @PasswordFormatDecorator()
  oldPassword: string;
  @Property()
  @PasswordFormatDecorator()
  newPassword: string;
}
