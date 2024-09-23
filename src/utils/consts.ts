export const TO_FORMAT = "avif";
export const SIZES = [
  { key: "xs", width: 48 },
  { key: "sm", width: 256 },
  { key: "md", width: 512 },
  { key: "lg", width: 768 },
  { key: "xl", width: 1024 }
];

export const allowedMimeTypes = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif"
] as const;

export type MimeType = (typeof allowedMimeTypes)[number];

export const allowedTableTypes = ["user", "source", "origin", "forum", "thread", "chat", "message"] as const;

export type TableType = (typeof allowedTableTypes)[number];
