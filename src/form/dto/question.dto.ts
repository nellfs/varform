import { IsInt, IsObject, IsString } from "class-validator";

export class QuestionDto {
  @IsString()
  text: string 

  @IsInt()
  type: number

  @IsString()
  options: string
}