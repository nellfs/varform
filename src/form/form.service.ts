import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { FormDto, QuestionDto } from "./dto/";
import { Question } from "@prisma/client";

@Injectable()
export class FormService {
  constructor(private readonly prisma: PrismaService) { }

  async create(formDto: FormDto) {
    const data: FormDto = {
      ...formDto,
    };
    try {
      const createdUser = await this.prisma.form.create({
        data,
      });
      return { ...createdUser };
    } catch (error) {
      throw error;
    }
  }

  async createQuestion(questionDto: QuestionDto, formId: number): Promise<Question> {
    const data = {
      ...questionDto,
      formId
    }

    try {
      const createdQuestion = await this.prisma.question.create({ data })

      return { ...createdQuestion }
    }catch(error) {
      console.log(error)
    }
   
  }

  async findUser(id: number) {
    return await this.prisma.form.findUnique({
      where: { id },
    });
  }
}
