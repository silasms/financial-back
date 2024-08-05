import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/service/prisma/prisma.module';
import { TokenModule } from 'src/service/token/token.module';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [PrismaModule, TokenModule],
  exports: [UserService]
})
export class UserModule {}
