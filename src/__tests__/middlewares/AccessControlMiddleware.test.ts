import { AccessControlMiddleware } from "../../middlewares/AccessControlMiddleware";
import { Req } from "@tsed/common";
import { Context } from "@tsed/platform-params";
import { UserRole } from "@prisma/client";
import { Unauthorized, Forbidden } from "@tsed/exceptions";

describe("AccessControlMiddleware", () => {
  let middleware: AccessControlMiddleware;

  beforeEach(() => {
    middleware = new AccessControlMiddleware();
  });

  it("should deny access to admin route if user not authenticated", () => {
    const request = {
      isAuthenticated: () => false
    } as unknown as Req;
    const context = {
      endpoint: {
        get: () => ({ role: UserRole.ADMIN })
      }
    } as unknown as Context;

    expect(() => middleware.use(request, context)).toThrow(Unauthorized);
  });

  it("should deny access to user route if user not authenticated", () => {
    const request = {
      isAuthenticated: () => false
    } as unknown as Req;
    const context = {
      endpoint: {
        get: () => ({ role: UserRole.USER })
      }
    } as unknown as Context;

    expect(() => middleware.use(request, context)).toThrow(Unauthorized);
  });

  it("should allow accesd route ALL route ", () => {
    const request = {
      isAuthenticated: () => true
    } as unknown as Req;
    const context = {
      endpoint: {
        get: () => ({ role: "ALL" })
      }
    } as unknown as Context;

    expect(() => middleware.use(request, context)).not.toThrow(Forbidden);
  });

  it("should allow access route if no roll is given", () => {
    const request = {
      isAuthenticated: () => true
    } as unknown as Req;
    const context = {
      endpoint: {}
    } as unknown as Context;

    expect(() => middleware.use(request, context)).not.toThrow(Forbidden);
  });
  it("should allow access to an admin user for admin routes", () => {
    const request = {
      isAuthenticated: () => true,
      user: { role: UserRole.ADMIN }
    } as unknown as Req;
    const context = {
      endpoint: {
        get: () => ({ role: UserRole.ADMIN })
      }
    } as unknown as Context;

    expect(() => middleware.use(request, context)).not.toThrow();
  });

  it("should allow access to an admin user for user routes", () => {
    const request = {
      isAuthenticated: () => true,
      user: { role: UserRole.ADMIN }
    } as unknown as Req;
    const context = {
      endpoint: {
        get: () => ({ role: UserRole.USER })
      }
    } as unknown as Context;

    expect(() => middleware.use(request, context)).not.toThrow();
  });

  it("should allow access to an user user for user routes", () => {
    const request = {
      isAuthenticated: () => true,
      user: { role: UserRole.USER }
    } as unknown as Req;
    const context = {
      endpoint: {
        get: () => ({ role: UserRole.USER })
      }
    } as unknown as Context;

    expect(() => middleware.use(request, context)).not.toThrow();
  });

  it("should forbid access to a non-admin user for admin routes", () => {
    const request = {
      isAuthenticated: () => true,
      user: { role: UserRole.USER }
    } as unknown as Req;
    const context = {
      endpoint: {
        get: () => ({ role: UserRole.ADMIN })
      }
    } as unknown as Context;

    expect(() => middleware.use(request, context)).toThrow(Forbidden);
  });

  it("should forbid access to a non defined UserRole", () => {
    const request = {
      isAuthenticated: () => true,
      user: { role: UserRole.ADMIN }
    } as unknown as Req;
    const context = {
      endpoint: {
        get: () => ({ role: "Not Defined Role" })
      }
    } as unknown as Context;

    expect(() => middleware.use(request, context)).toThrow(Forbidden);
  });

  it("should forbid access to a non defined UserRole", () => {
    const request = {
      isAuthenticated: () => true,
      user: { role: "Not Defined Role" }
    } as unknown as Req;
    const context = {
      endpoint: {
        get: () => ({ role: UserRole.USER })
      }
    } as unknown as Context;

    expect(() => middleware.use(request, context)).toThrow(Forbidden);
  });

  // Add more tests for different roles and scenarios
});
