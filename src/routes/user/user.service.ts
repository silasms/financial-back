import { Injectable, PreconditionFailedException, UnauthorizedException } from '@nestjs/common';
import { hash, verify } from 'argon2';
import { PrismaService } from 'src/service/prisma/prisma.service';
import { TokenService } from 'src/service/token/token.service';
import { uuidv7 } from 'uuidv7';
import { CreateUserBodyDTO } from './dto/create-user-body.dto';
import { LoginBodyDTO } from './dto/login-body.dto';
import { EditUserBodyDTO } from './dto/edit-user-body.dto';

@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService,
    private tokenService: TokenService
  ) {}

  async createUser({ name, email, password }: CreateUserBodyDTO) {
    const userDb = await this.prismaService.user.findFirst({ where: { email } })
    if (userDb) throw new PreconditionFailedException('Email or Username already exists.')
    const user = await this.prismaService.user.create({
      data: {
        id: uuidv7(),
        name,
        email,
        password: String(await hash(password)),
      }
    })
    return user
  }

  async login({ email, password }: LoginBodyDTO) {
    const user = await this.prismaService.user.findFirst({ where: { email } })
    if (!user) throw new UnauthorizedException('Invalid email or password.')
    
    const { password: hash, ...userData } = user
    if (await verify(hash, password))
      return this.tokenService.createToken(userData)

    throw new UnauthorizedException('Invalid email or password.')
  }

  async editUser({ name, password, id }: EditUserBodyDTO) {
    try {
      await this.prismaService.user.update({
        where: {
          id
        },
        data: {
          name,
          password
        }
      })
    } catch(err) {
      throw new PreconditionFailedException('There is not  user with this id.')
    }
  }

  async getById(userId: string) {
    return await this.prismaService.user.findFirst({ where: { id: userId} })
  }
}
