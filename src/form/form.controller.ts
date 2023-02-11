import { Controller, Post } from '@nestjs/common';
import { isPublic } from 'src/auth/decoratos/is-public.decoratos';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @isPublic()
  @Post()
  async create(){
    return this.formService.create()
  }
}
