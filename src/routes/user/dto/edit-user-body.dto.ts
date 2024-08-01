import { Type } from "class-transformer";
import { IsString } from "class-validator";

export class EditUserBodyDTO {
  @IsString()
  @Type(() => String)
  id: string

  @IsString()
  @Type(() => String)
  name: string

  @IsString()
  @Type(() => String)
  password: string
}