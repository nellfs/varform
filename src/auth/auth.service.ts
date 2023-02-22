import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import * as bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { UserPayload } from "./model";
import { JwtService } from "@nestjs/jwt";
import { UserToken } from "./model";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: User): Promise<UserToken> {
    const payload: UserPayload = {
      sub: user.id,
      name: user.firstName,
    };

    const jwtToken = this.jwtService.sign(payload);

    const decodedJwtAccessToken: any =
      this.jwtService.decode(jwtToken);

    console.log(decodedJwtAccessToken);

    return {
      access_token: jwtToken,
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (user) {
      const isPasswordValid = bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new Error(
      "Email address or password provided is incorrect.",
    );
  }
}
