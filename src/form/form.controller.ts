import { Body, Controller, Post } from '@nestjs/common';
import { isPublic } from 'src/auth/decoratos/is-public.decoratos';
import { FormDto } from './dto/form.dto';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @isPublic()
  @Post()
  async create(@Body() createdFormDto: FormDto){
   return this.formService.create(createdFormDto)
  }
}
