import { Module } from '@nestjs/common';
import { MovementService } from './movement.service';
import { MovementController } from './movement.controller';
import { PrismaModule } from 'src/service/prisma/prisma.module';
import { TokenModule } from 'src/service/token/token.module';
import { UserModule } from '../user/user.module';

@Module({
  providers: [MovementService],
  controllers: [MovementController],
  imports: [PrismaModule, TokenModule, UserModule],
})
export class MovementModule {}
