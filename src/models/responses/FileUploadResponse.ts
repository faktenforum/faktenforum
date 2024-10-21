import { Property, Required } from "@tsed/schema";
import { IsUUID } from "class-validator";
export class FileUploadResponse {
  @Property()
  @Required()
  @IsUUID()
  fileId: string;
  @Property()
  @Required()
  @Property()
  entryId: string;
}
