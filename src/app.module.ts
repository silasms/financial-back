import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './routes/user/user.module';
import { PrismaModule } from './service/prisma/prisma.module';
import { TokenModule } from './service/token/token.module';
import { MovementModule } from './routes/movement/movement.module';

@Module({
  imports: [UserModule, PrismaModule, TokenModule, MovementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
