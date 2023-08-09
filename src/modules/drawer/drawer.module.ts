import { Module } from '@nestjs/common';
import { DrawerController } from './drawer.controller';

@Module({
  controllers: [DrawerController]
})
export class DrawerModule {}
