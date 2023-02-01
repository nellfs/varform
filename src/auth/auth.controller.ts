import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { isPublic } from "./decoratos/is-public.decoratos";
import { LocalAuthGuard } from "./guard";
import { AuthRequest } from "./model/AuthRequest";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @isPublic()
  @Post("login")
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  login(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }
}
