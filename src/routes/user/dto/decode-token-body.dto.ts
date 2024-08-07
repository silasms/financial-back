import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class DecodeTokenBodyDTO {
  @IsString()
  @Type(() => String)
  @IsNotEmpty()
  token: string
}