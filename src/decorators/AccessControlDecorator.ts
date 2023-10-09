import { AccessControlMiddleware } from "@/middlewares";
import { useDecorators } from "@tsed/core";
import { Forbidden, Unauthorized } from "@tsed/exceptions";
import { Authenticate } from "@tsed/passport";
import { UseAuth } from "@tsed/platform-middlewares";
import { In, Returns, Security } from "@tsed/schema";

export interface AccessControlDecoratorOptions extends Record<string, unknown> {
  role?: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function AccessControlDecorator(options: AccessControlDecoratorOptions = {}): Function {
  return useDecorators(
    // Order of Decorators is essential  Authenticate -> Secu
    Returns(401, Unauthorized).Description("Unauthorized"),
    Returns(403, Forbidden).Description("Forbidden"),
    UseAuth(AccessControlMiddleware, options),
    Authenticate("jwt", { session: false }),
    Security("jwt"),
    In("header").Name("Authorization").Type(String).Required(true)
  );
}
