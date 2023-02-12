import { Injectable } from '@nestjs/common';
import { Form } from '@prisma/client';

@Injectable()

interface FormPayload {
  id: string;
  question: string;
}

export class FormService {
async create(form: Form){
    const 
    
    return "hello form"
  } 
}
