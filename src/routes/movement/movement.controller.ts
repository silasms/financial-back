import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateMovementBodyDTO } from './dto/create-movement-body.dto';
import { MovementService } from './movement.service';
import { UpdateMovementDTO } from './dto/update-movement.dto';

@Controller('movement')
export class MovementController {
  constructor( private movementService: MovementService ) {}

  @Post('create')
  async create(@Body() data: CreateMovementBodyDTO) {
    return await this.movementService.create(data)
  }

  @Get('user/:id')
  async getById(@Param('id') id: string) {
    return await this.movementService.getAllByUser(id)
  }

  @Patch()
  async update(@Body() data: UpdateMovementDTO) {
    return await this.movementService.update(data)
  }
}
