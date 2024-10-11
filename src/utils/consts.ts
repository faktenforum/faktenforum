export const TO_FORMAT = "avif";
export const SIZES = [
  { key: "xs", width: 48 },
  { key: "sm", width: 256 },
  { key: "md", width: 512 },
  { key: "lg", width: 768 },
  { key: "xl", width: 1024 }
];

export enum HasuraOperations {
  UPDATE = "UPDATE",
  INSERT = "INSERT",
  DELETE = "DELETE"
}

export const allowedMimeTypes = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif"
] as const;

export enum UserRole {
  admin = "admin",
  moderator = "moderator",
  senior = "senior",
  intermediate = "intermediate",
  junior = "junior",
  aspirant = "aspirant"
}

export enum ClaimStatus {
  submitted = "submitted",
  accepted = "accepted",
  observed = "observed",
  discarded = "discarded",
  spam = "spam",
  rejected = "rejected",
  checked = "checked",
  published = "published"
}

export const UserRolePowerLevels: Record<UserRole, number> = {
  [UserRole.admin]: 100,
  [UserRole.moderator]: 50,
  [UserRole.senior]: 30,
  [UserRole.intermediate]: 20,
  [UserRole.junior]: 10,
  [UserRole.aspirant]: 0
};

export function getPowerLevel(role: string): number | undefined {
  const userRole = role as UserRole;
  return UserRolePowerLevels[userRole];
}
// create mappinf of user rolte to powerlevel

export type MimeType = (typeof allowedMimeTypes)[number];

export const allowedTableTypes = ["user", "source", "origin", "comment", "message"] as const;

export type TableType = (typeof allowedTableTypes)[number];
