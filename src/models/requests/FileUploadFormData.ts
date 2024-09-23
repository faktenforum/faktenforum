import { Property, Required, Enum } from "@tsed/schema";
import { IsUUID } from "class-validator";
import { type TableType, allowedTableTypes, type MimeType, allowedMimeTypes } from "~/utils/consts";
export class FileUploadFormData {
  @Property()
  @Required()
  @IsUUID()
  id: string;

  @Property()
  @Required()
  @Enum(...allowedTableTypes)
  table: TableType;

  @Property()
  relativePath: string;

  @Property()
  name: string;

  @Property()
  @Enum(...allowedMimeTypes)
  type: MimeType;
}
