import { Controller, Post, Request } from '@nestjs/common';
import { AuthRequest } from 'src/auth/model';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async create(@Request() req: AuthRequest ){
   return this.formService.create({authorId: req.user.id})
  }
}
