import { Body, Controller, Patch, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginBodyDTO } from './dto/login-body.dto';
import { CreateUserBodyDTO } from './dto/create-user-body.dto';
import { EditUserBodyDTO } from './dto/edit-user-body.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('user')
export class UserController {
  constructor (private userService: UserService) {}

  @Post('login')
  async login(@Body() body: LoginBodyDTO) {
    return await this.userService.login(body)
  }

  @Post('register')
  async register(@Body() body: CreateUserBodyDTO) {
    return await this.userService.createUser(body)
  }

  @UseGuards(AuthGuard)
  @Patch('edit')
  async edit(@Body() body: EditUserBodyDTO) {
    return await this.userService.editUser(body)
  }
}
