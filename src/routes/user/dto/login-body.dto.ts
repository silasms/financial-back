import { Type } from "class-transformer"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class LoginBodyDTO {
  @IsEmail()
  @Type(() => String)
  @IsNotEmpty()
  email: string

  @IsString()
  @Type(() => String)
  @IsNotEmpty()
  password: string
}