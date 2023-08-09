import { Module } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';
const providers = [DatabaseService, PrismaService];

@Module({

  controllers: [DatabaseController],
  exports:[DatabaseService],
  providers: [...providers],

})
export class DatabaseModule {}
