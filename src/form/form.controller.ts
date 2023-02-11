import { Controller, Post } from '@nestjs/common';
    console.log("hello console")
import { isPublic } from 'src/auth/decoratos/is-public.decoratos';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async create(){
    return this.formService.create()
  }
}
