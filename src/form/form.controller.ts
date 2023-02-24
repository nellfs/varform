import { Controller, Post, Request, Body, Param, NotFoundException } from "@nestjs/common";
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
    const numberFormId = Number(formId)
    if (isNaN(numberFormId)) {
      throw new NotFoundException("Form not found")
    }
    return this.formService.createQuestion(questionDto, numberFormId)
  }
}
