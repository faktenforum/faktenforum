import { Property, Required } from "@tsed/schema";

// Create an Enum of roles
export enum UserRole {
  Administrator = "administrator",
  Editor = "editor",
  Moderator = "moderator",
  Senior = "senior",
  Junior = "junior",
  Aspirant = "aspirant"
}

export enum PowerLevel {
  Administrator = 100,
  Editor = 80,
  Moderator = 60,
  Senior = 40,
  Junior = 20,
  Aspirant = 0
}

export class User {
  @Required()
  @Property()
  userId: string;

  @Required()
  @Property()
  username: string;

  @Required()
  @Property()
  role: UserRole;

  @Required()
  @Property()
  sessionId: string;

  @Property()
  lang: string;
}
