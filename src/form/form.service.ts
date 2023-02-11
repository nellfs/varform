import { Injectable } from '@nestjs/common';

@Injectable()
export class FormService {
  async create() {
    console.log("hello console")
    return "hello form"
  } 
}
