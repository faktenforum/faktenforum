import { Unauthorized } from "@tsed/exceptions";
import { UserRole } from "@prisma/client";
import type { JwtPayload } from "~/protocols/JwtProtocol";
import { JwtProtocol } from "~/protocols/JwtProtocol";
import { UsersService } from "~/services/1_UsersService";
import { Req } from "@tsed/common";
import { describe, it, expect, beforeEach, vi } from "vitest";

vi.mock("~/services/1_UsersService");

describe("JwtProtocol", () => {
  let jwtProtocol: JwtProtocol;
  let usersService: UsersService;

  beforeEach(() => {
    usersService = new UsersService() as unknown as UsersService;
    jwtProtocol = new JwtProtocol();
    jwtProtocol.usersService = usersService;

    // Resetting mocks
    usersService.getUserById = vi.fn();
  });

  it("should return user details for a valid JWT", async () => {
    const jwtPayload: JwtPayload & { sessionId: string } = {
      sub: "123",
      iat: Date.now(),
      exp: Date.now() + 3600,
      role: "user",
      sessionId: "session123"
    };

    const expectedUser = {
      id: "123",
      email: "test@example.com",
      password: "hashedPassword", // Assuming the password is hashed
      role: UserRole.USER, // Assuming UserRole is an enum
      createdAt: new Date(),
      updatedAt: new Date()
    };

    usersService.getUserById = vi.fn().mockResolvedValue(expectedUser);

    await expect(jwtProtocol.$onVerify({} as Req, jwtPayload)).resolves.toMatchObject({
      id: expectedUser.id,
      email: expectedUser.email,
      role: expectedUser.role,
      sessionId: jwtPayload.sessionId
    });
  });

  it("should throw Unauthorized for an invalid JWT", async () => {
    const jwtPayload: JwtPayload & { sessionId: string } = {
      sub: "invalid-user",
      iat: Date.now(),
      exp: Date.now() + 3600,
      role: "user",
      sessionId: "session123"
    };

    usersService.getUserById = vi.fn().mockResolvedValue(null);

    await expect(jwtProtocol.$onVerify({} as Req, jwtPayload)).rejects.toThrow(Unauthorized);
  });

  // Add more tests as needed
});
