import { Body, Controller, Post } from "@nestjs/common";
import { UserDto } from "./dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: UserDto) {
    return this.userService.create(createUserDto);
  }
}
