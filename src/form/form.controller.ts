import { Controller, Post, Get, Request, Body, Param } from "@nestjs/common";
import { AuthRequest } from "src/auth/model";
import { QuestionDto } from "./dto";
import { FormService } from "./form.service";

@Controller("form")
export class FormController {
  constructor(private readonly formService: FormService) { }

  @Post()
  async create(@Request() req: AuthRequest) {
    return this.formService.create({ authorId: req.user.id });
  }

  @Post(':formId/question')
  async question(@Param('formId') formId: number, @Body() questionDto: QuestionDto) {
    return this.formService.createQuestion(questionDto, Number(formId))
  }
}
