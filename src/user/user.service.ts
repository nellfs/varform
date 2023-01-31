import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UserDto } from "./dto";
import * as bcrypt from "bcrypt";
import { User } from "@prisma/client";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userDto: UserDto): Promise<User> {
    const data: UserDto = {
      ...userDto,
      password: await bcrypt.hash(userDto.password, 10),
    };

    const createdUser = await this.prisma.user.create({
      data,
    });

    return { ...createdUser, password: undefined };
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
