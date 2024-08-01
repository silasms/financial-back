import { Type } from "class-transformer"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UpdateMovementDTO {
  @IsString()
  @Type(() => String)
  @IsNotEmpty()
  id: string

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
}