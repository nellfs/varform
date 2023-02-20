import { Controller, Get, Request } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("/me")
  getMe(@Request() req: any) {
    return req.user.id;
  }
}
