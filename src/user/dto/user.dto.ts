import {
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";

export class UserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @MinLength(4)
  firstName: string;

  @IsString()
  @IsOptional()
  lastName?: string;
}
