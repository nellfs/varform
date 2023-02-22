import { IsInt } from "class-validator";

export class FormDto {
  @IsInt()
  authorId: number;
}
