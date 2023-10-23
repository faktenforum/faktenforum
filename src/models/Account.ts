import { CollectionOf, Format, Optional, Property } from "@tsed/schema";

export class Session {
  @Property()
  id: string = "";

  @Property()
  @Optional()
  userAgent: string | null;

  @Format("date-time")
  expiresAt: Date;

  @Format("date-time")
  createdAt: Date;

  @Format("date-time")
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
  oldPassword: string;
  @Property()
  newPassword: string;
}
