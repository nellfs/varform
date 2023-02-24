import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { FormDto, QuestionDto } from "./dto/";
import { Question } from "@prisma/client";
import { PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from "@prisma/client/runtime";

@Injectable()
export class FormService {
  constructor(private readonly prisma: PrismaService) { }

  async create(formDto: FormDto) {
    const data: FormDto = {
      ...formDto,
    };
    try {
      const createdForm = await this.prisma.form.create({
        data,
      });
      return { ...createdForm };
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
    } catch (error) {
      if (error.code === "P2003") {
        throw new NotFoundException("Form not found")
      }
      throw error;
    }
  }

  async findUser(id: number) {
    return await this.prisma.form.findUnique({
      where: { id },
    });
  }
}
