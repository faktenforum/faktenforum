import { useDecorators } from "@tsed/core";
import { CollectionOf, Format, MinLength, Pattern, Property, Required } from "@tsed/schema";

// eslint-disable-next-line @typescript-eslint/ban-types
export function PasswordFormatDecorator(): Function {
  return useDecorators(MinLength(8), Pattern(/^[A-Za-z0-9]+$/));
}
