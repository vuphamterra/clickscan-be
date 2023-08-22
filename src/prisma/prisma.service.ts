import type { INestApplication, OnModuleInit } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{

    constructor() {
        super();
      }

    async onModuleInit() {
        await this.$connect();
    }

    // eslint-disable-next-line @typescript-eslint/require-await
    // async enableShutdownHooks(app: INestApplication) {
    //     // eslint-disable-next-line @typescript-eslint/no-misused-promises
    //     this.$on('beforeExit', async () => {
    //       await app.close();
    //     });
    //   }
}
