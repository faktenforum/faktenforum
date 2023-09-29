import { UserService } from "@/services/UsersService";
import { Controller, Get, PathParams } from "@tsed/common";

// Import the generated type

@Controller("/users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get("/")
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get("/:id")
  async getUserById(@PathParams("id") id: string) {
    return this.userService.getUserById(id);
  }

  // ... other methods ...
}
