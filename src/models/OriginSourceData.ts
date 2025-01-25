import { Optional } from "@tsed/schema";

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
