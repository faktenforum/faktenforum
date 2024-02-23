import { useDecorators } from "@tsed/core";
import { MinLength, Pattern } from "@tsed/schema";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+$/;

// eslint-disable-next-line @typescript-eslint/ban-types
export function PasswordFormatDecorator(): Function {
  return useDecorators(MinLength(8), Pattern(passwordRegex));
}
