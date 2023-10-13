import { CollectionOf, Format, Property } from "@tsed/schema";

export class LoggedInDevices {
  @Property()
  id: string;

  @Property()
  userAgent: string;

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

  @Format("date-time")
  createdAt: Date;

  @Format("date-time")
  updatedAt: Date;

  @CollectionOf(LoggedInDevices)
  refreshTokens: LoggedInDevices[];
}
