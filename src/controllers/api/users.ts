import { User } from "@prisma/client";
import { BodyParams, Controller, Delete, Get, Inject, PathParams, Post, Put } from "@tsed/common";
import { NotFound } from "@tsed/exceptions";
import { Returns } from "@tsed/schema";
import { AccessControlDecorator } from "~/decorators";
import { UserCreateDTO, UserDTO, UserUpdateDTO } from "~/models/UserDTO";
import { UsersService } from "~/services/UsersService";

// Import the generated type

@Controller("/users")
export class UserController {
  @Inject()
  usersService: UsersService;

  @AccessControlDecorator({ role: "ADMIN" })
  @Get("/")
  @Returns(200, Array).Of(UserDTO)
  async getAllUsers() {
    const result = await this.usersService.getAllUsers();
    return result.map((user: User) => ({
      id: user.id,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }));
  }

  @AccessControlDecorator({ role: "ADMIN" })
  @Post("/")
  @Returns(200, UserDTO)
  async createUser(@BodyParams() body: UserCreateDTO) {
    const user = await this.usersService.createUser(body.email, body.password, body.role);
    return {
      id: user.id,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };
  }

  @AccessControlDecorator({ role: "ADMIN" })
  @Get("/:id")
  @Returns(200, UserDTO)
  async getUserById(@PathParams("id") id: string) {
    const user = await this.usersService.getUserById(id);
    if (!user) throw new NotFound("User not found");
    return {
      id: user.id,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };
  }

  @AccessControlDecorator({ role: "ADMIN" })
  @Put("/:id")
  @Returns(200, UserDTO)
  async updateUserById(@PathParams("id") id: string, @BodyParams() body: UserUpdateDTO) {
    const user = await this.usersService.updateUserById(id, body);
    if (!user) throw new NotFound("User not found");
    return {
      id: user.id,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };
  }

  @AccessControlDecorator({ role: "ADMIN" })
  @Delete("/:id")
  @Returns(200, UserDTO)
  async deleteUserById(@PathParams("id") id: string) {
    const user = await this.usersService.deleteUserById(id);
    if (!user) throw new NotFound("User not found");
    return {
      id: user.id,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };
  }

  // ... other methods ...
}
