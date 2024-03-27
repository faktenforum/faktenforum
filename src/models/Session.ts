import { Property, Required } from "@tsed/schema";

// Create an Enum of roles
export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  NEWBIE = "newbie"
}

export class Session {
  @Required()
  @Property()
  userId: string;

  @Required()
  @Property()
  role: UserRole;
}
