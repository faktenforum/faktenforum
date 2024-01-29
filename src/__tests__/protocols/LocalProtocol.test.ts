import { UserRole } from "@prisma/client";
import bcrypt from "bcrypt";
import { LocalProtocol } from "~/protocols/LocalProtocol";
import { UsersService } from "~/services/1_UsersService";
import { AuthService } from "~/services/1_AuthService";
import { Credentials } from "~/models";
import { Req } from "@tsed/common";

jest.mock("~/services/1_UsersService");
jest.mock("~/services/1_AuthService");

describe("LocalProtocol", () => {
  let localProtocol: LocalProtocol;
  let usersService: jest.Mocked<UsersService>;
  let authService: jest.Mocked<AuthService>;

  beforeEach(() => {
    usersService = new UsersService() as jest.Mocked<UsersService>;
    authService = new AuthService() as jest.Mocked<AuthService>;
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

    usersService.getUserByEmail.mockResolvedValue(user);
    authService.verifyPassword.mockResolvedValue(true);

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

    usersService.getUserByEmail.mockResolvedValue(user);
    authService.verifyPassword.mockResolvedValue(false);

    const result = await localProtocol.$onVerify({} as Req, credentials);

    expect(result).toBe(false);
  });

  it("should return false for non-existing user", async () => {
    const credentials: Credentials = { username: "nonexistent@example.com", password: "password123" };

    usersService.getUserByEmail.mockResolvedValue(null);

    const result = await localProtocol.$onVerify({} as Req, credentials);

    expect(result).toBe(false);
  });

  // Add more tests as needed
});
