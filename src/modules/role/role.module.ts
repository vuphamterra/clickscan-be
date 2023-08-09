import { Module } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { RoleController } from './role.controller';
import { RoleService } from './role.service';
const providers = [RoleService, PrismaService];

@Module({
  controllers: [RoleController],
  providers: [...providers],
})
export class RoleModule {}
