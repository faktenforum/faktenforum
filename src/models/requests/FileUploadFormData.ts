import { Property, Required, Enum, Optional } from "@tsed/schema";
import { IsUUID, ValidateIf, IsDefined } from "class-validator";
import { type MimeType, allowedMimeTypes } from "~/utils/consts";

enum Tables {
  User = "user",
  Source = "source",
  Origin = "origin",
  Comment = "comment",
  Message = "message"
}

export class OrginSourceData {
  @Optional()
  url: string;
  @Optional()
  archive_url: string;
  @Optional()
  excerpt: string;
  @Optional()
  remarks: string;
}

export class FileUploadFormData {
  @Property()
  @Optional()
  @IsUUID()
  id: string;

  @Property()
  @Required()
  @Enum(Tables)
  table: Tables;

  @Property()
  @ValidateIf((o) => !o.id)
  @IsDefined()
  tableData: string;

  @Property()
  @Required()
  relativePath: string;

  @Property()
  @Required()
  name: string;

  @Property()
  @Required()
  type: MimeType;
}
