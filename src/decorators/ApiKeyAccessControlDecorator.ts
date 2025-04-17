import { useDecorators } from "@tsed/core";
import { Forbidden, Unauthorized } from "@tsed/exceptions";
import { UseAuth } from "@tsed/platform-middlewares";
import { Returns } from "@tsed/schema";
import { ApiKeyAccessControlMiddleware } from "~/middlewares";
import { ForKratosResponse } from "~/models";

export interface ApiKeyAccessControlDecoratorOptions {
  service: "kratos" | "hasura";
}

export function ApiKeyAccessControlDecorator(options: ApiKeyAccessControlDecoratorOptions): Function {
  const decorators = [
    // Always apply your auth middleware decorator.
    UseAuth(ApiKeyAccessControlMiddleware, options)
  ];

  // Conditionally add different response decorators.
  if (options.service === "kratos") {
    decorators.push(Returns(401, ForKratosResponse).Description("Unauthorized"));
    decorators.push(Returns(403, ForKratosResponse).Description("Forbidden"));
  } else if (options.service === "hasura") {
    decorators.push(Returns(401, Unauthorized).Description("Unauthorized"));
    decorators.push(Returns(403, Forbidden).Description("Forbidden"));
  }

  return useDecorators(...decorators);
}
