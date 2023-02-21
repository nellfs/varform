import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FormDto } from './dto/form.dto';

@Injectable()
export class FormService {
  constructor(private readonly prisma: PrismaService) { }

  async create(formDto: FormDto) {
    const data: FormDto = {
      ...formDto
    };
    try {
      const createdUser = await this.prisma.form.create({
        data,
      });
      return { ...createdUser }
    } catch (error) {
      throw error;
    }
  }

  async findUser(id: number) {
    return await this.prisma.form.findUnique({
      where: { id },
    })
  }
}
