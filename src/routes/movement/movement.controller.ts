import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateMovementBodyDTO } from './dto/create-movement-body.dto';
import { MovementService } from './movement.service';
import { UpdateMovementDTO } from './dto/update-movement.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('movement')
export class MovementController {
  constructor( private movementService: MovementService ) {}

  @UseGuards(AuthGuard)
  @Post('create')
  async create(@Body() data: CreateMovementBodyDTO) {
    return await this.movementService.create(data)
  }

  @UseGuards(AuthGuard)
  @Get('user/:id')
  async getById(@Param('id') id: string) {
    return await this.movementService.getAllByUser(id)
  }

  @UseGuards(AuthGuard)
  @Patch()
  async update(@Body() data: UpdateMovementDTO) {
    return await this.movementService.update(data)
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.movementService.deleteById(id)
  }
}
