import { Type } from "class-transformer"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateMovementBodyDTO {
  @IsString()
  @Type(() => String)
  @IsNotEmpty()
  name: string

  @IsString()
  @Type(() => String)
  @IsNotEmpty()
  status: 'SPENDING' | 'EARNINGS'

  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  value: number

  @IsString()
  @Type(() => String)
  @IsNotEmpty()
  userId: string
}