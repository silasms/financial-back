import { Injectable, PreconditionFailedException } from '@nestjs/common';
import { PrismaService } from 'src/service/prisma/prisma.service';
import { CreateMovementBodyDTO } from './dto/create-movement-body.dto';
import { UserService } from '../user/user.service';
import { uuidv7 } from 'uuidv7';
import { UpdateMovementDTO } from './dto/update-movement.dto';

@Injectable()
export class MovementService {
  constructor (
    private prismaService: PrismaService,
    private userService: UserService
  ) {}

  async create({ name, status, value, userId }: CreateMovementBodyDTO) {
    const user = await this.userService.getById(userId)
    if (!user) throw new PreconditionFailedException('There is not  user with this id.')

    return await this.prismaService.movement.create({
      data: {
        id: uuidv7(),
        name,
        status,
        value,
        userId 
      }
    })
  }

  async getAllByUser(userId: string) {
    return await this.prismaService.movement.findMany({ where: { userId }})
  }

  async update({ id, name, status, value }: UpdateMovementDTO) {
    return await this.prismaService.movement.update({
      where: { id },
      data: {
        name,
        status,
        value
      }
    })
  }
}
