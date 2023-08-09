import { Module } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { UserController } from './user.controller';
import { UserService } from './user.service';

const providers = [UserService, PrismaService];

@Module({
  providers: [...providers],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
