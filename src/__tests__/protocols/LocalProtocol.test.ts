import { UserRole } from "@prisma/client";
import bcrypt from "bcrypt";
import { LocalProtocol } from "~/protocols/LocalProtocol";
import { UsersService } from "~/services/1_UsersService";
import { AuthService } from "~/services/1_AuthService";
import { Credentials } from "~/models";
import { Req } from "@tsed/common";
import { describe, it, expect, beforeEach, vi } from "vitest";
vi.mock("~/services/1_UsersService");
vi.mock("~/services/1_AuthService");

describe("LocalProtocol", () => {
  let localProtocol: LocalProtocol;
  let usersService: UsersService;
  let authService: AuthService;

  beforeEach(() => {
    // Create mock instances
    usersService = new UsersService() as unknown as UsersService;
    authService = new AuthService() as unknown as AuthService;

    // Assign mock functions
    usersService.getUserByEmail = vi.fn();
    authService.verifyPassword = vi.fn();

    localProtocol = new LocalProtocol();
    localProtocol.usersService = usersService;
    localProtocol.authService = authService;
  });

  it("should return PassportUser for valid credentials", async () => {
    const credentials: Credentials = { username: "user@example.com", password: "passworD!123" };
    const passwordHash = await bcrypt.hash("passworD!123", 10); // 10 is the saltRounds; adjust as necessary
    const user = {
      id: "1",
      email: "user@example.com",
      password: passwordHash,
      role: UserRole.USER,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    usersService.getUserByEmail = vi.fn().mockResolvedValue(user);
    authService.verifyPassword = vi.fn().mockResolvedValue(true);

    const result = await localProtocol.$onVerify({} as Req, credentials);

    expect(result).toEqual({
      id: user.id,
      email: user.email,
      role: user.role
    });
  });

  it("should return false for invalid credentials", async () => {
    const credentials: Credentials = { username: "user@example.com", password: "wrongPassword" };
    const passwordHash = await bcrypt.hash("passworD!123", 10); // 10 is the saltRounds; adjust as necessary
    const user = {
      id: "1",
      email: "user@example.com",
      password: passwordHash,
      role: UserRole.USER,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    usersService.getUserByEmail = vi.fn().mockResolvedValue(user);
    authService.verifyPassword = vi.fn().mockResolvedValue(false);

    const result = await localProtocol.$onVerify({} as Req, credentials);

    expect(result).toBe(false);
  });

  it("should return false for non-existing user", async () => {
    const credentials: Credentials = { username: "nonexistent@example.com", password: "password123" };

    usersService.getUserByEmail = vi.fn().mockResolvedValue(null);

    const result = await localProtocol.$onVerify({} as Req, credentials);

    expect(result).toBe(false);
  });

  // Add more tests as needed
});
