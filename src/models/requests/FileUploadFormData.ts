import { Property, Required, Enum, Optional } from "@tsed/schema";
import { IsUUID, ValidateIf, IsDefined } from "class-validator";
import { type TableType, allowedTableTypes, type MimeType, allowedMimeTypes } from "~/utils/consts";

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
  @Enum(...allowedTableTypes)
  table: TableType;

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
  @Enum(...allowedMimeTypes)
  type: MimeType;
}
