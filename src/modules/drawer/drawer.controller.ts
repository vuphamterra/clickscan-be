import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { API_VERSION_NUMBER } from '@/contants';

import { ConvertDto } from './dtos/convert.dto';
import { CreateDrawerDto } from './dtos/create-drawer.dto';
import { DrawerDto } from './dtos/drawer.dto';
import { DuplicateDrawerDto } from './dtos/duplicate-drawer.dto';
import { ImportDto } from './dtos/import.dto';

@Controller({
  path: 'drawer',
  version: API_VERSION_NUMBER,
})
@ApiTags('drawer')
export class DrawerController {
  @Post()
  @ApiCreatedResponse({
    description: 'Create drawer successful',
    type: DrawerDto,
  })
  createDrawer(@Body() data: CreateDrawerDto) {}

  @Post('duplicate')
  @ApiCreatedResponse({
    description: 'Duplicate drawer successful',
    type: DrawerDto,
  })
  duplicateDrawer(@Body() data: DuplicateDrawerDto) {}

  @Post('convert')
  @ApiOkResponse({
    description: 'Convert successful',
    type: DrawerDto,
  })
  converPdfToImg(@Body() data: ConvertDto) {}

  @Post('bulk-import')
  @ApiOkResponse({
    description: 'Import successful',
    type: DrawerDto,
  })
  import(@Body() data: ImportDto) {}

  @Get('all')
  @ApiOkResponse({
    description: 'Get drawers successful',
    type: [DrawerDto],
  })
  getDrawers() {}

  @Get(':id')
  @ApiOkResponse({
    description: 'Get drawer successful',
    type: DrawerDto,
  })
  getDrawerById(@Param('id') id: string) {}

  @Put(':id')
  @ApiOkResponse({
    description: 'Update drawer successful',
    type: DrawerDto,
  })
  updateDrawer(@Param('id') id: number) {}

  @Put(':id/purge')
  @ApiOkResponse({
    description: 'Purge drawer successful',
    type: DrawerDto,
  })
  purgeDrawer(@Param('id') id: number) {}

  @Put(':id/fulltext-wizard')
  @ApiOkResponse({
    description: 'Fulltext wizard successful',
  })
  wizardDrawer(@Param('id') id: number) {}

  @Delete(':id')
  @ApiOkResponse({
    description: 'Delete drawer successful',
  })
  deleteDrawer(@Param('id') id: number) {}
}
