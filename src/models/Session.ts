import { Property, Required } from "@tsed/schema";

// Create an Enum of roles
export enum UserRole {
  ADMINISTRATOR = "administrator",
  EDITOR = "editor",
  MODERATOR = "moderator",
  SENIOR = "senior",
  JUNIOR = "junior",
  ASPIRANT = "aspirant"
}

export enum PowerLevel {
  ADMINISTRATOR = 100,
  EDITOR = 80,
  MODERATOR = 60,
  SENIOR = 40,
  JUNIOR = 20,
  ASPIRANT = 0
}

export const POWER_LEVELS = {
  [UserRole.ADMINISTRATOR]: PowerLevel.ADMINISTRATOR,
  [UserRole.EDITOR]: PowerLevel.EDITOR,
  [UserRole.MODERATOR]: PowerLevel.MODERATOR,
  [UserRole.SENIOR]: PowerLevel.SENIOR,
  [UserRole.JUNIOR]: PowerLevel.JUNIOR,
  [UserRole.ASPIRANT]: PowerLevel.ASPIRANT
};

export class Session {
  @Required()
  @Property()
  userId: string;

  @Required()
  @Property()
  username: string;

  @Required()
  @Property()
  role: UserRole;
}
