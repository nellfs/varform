import { Body, Controller, Post, Request } from '@nestjs/common';
import { FormDto } from './dto/form.dto';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async create(@Request() req: any ){
   return this.formService.create({authorId: req.user.id})
  }
}
