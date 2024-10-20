import { PowerLevel, UserRole } from "~/models";

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

export const SubmissionStatuses = [
  ClaimStatus.submitted,
  ClaimStatus.observed,
  ClaimStatus.spam,
  ClaimStatus.rejected
];

export const POWER_LEVELS = {
  [UserRole.Administrator]: PowerLevel.Administrator,
  [UserRole.Editor]: PowerLevel.Editor,
  [UserRole.Moderator]: PowerLevel.Moderator,
  [UserRole.Senior]: PowerLevel.Senior,
  [UserRole.Junior]: PowerLevel.Junior,
  [UserRole.Aspirant]: PowerLevel.Aspirant
};

export function getPowerLevel(role: string): number | undefined {
  const userRole = role as UserRole;
  return POWER_LEVELS[userRole];
}
// create mappinf of user rolte to powerlevel

export type MimeType = (typeof allowedMimeTypes)[number];
