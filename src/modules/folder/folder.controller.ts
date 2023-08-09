import { API_VERSION_NUMBER } from '@/contants';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FolderDto } from './dtos/folder.dtos';
import { MoveFolderDto } from './dtos/move-folder.dto';

@Controller({
  path: 'folder',
  version: API_VERSION_NUMBER,
})
@ApiTags('folder')
export class FolderController {
  @Post('move')
  @ApiOkResponse({
    description: 'Move folder successful',
  })
  move(@Body() data: MoveFolderDto) {}

  @Get(':id')
  @ApiOkResponse({
    description: 'Export folder successful',
    type: FolderDto,
  })
  export(@Param('id') id: number) {}

  @Put(':id')
  @ApiOkResponse({
    description: 'Update folder successful',
    type: FolderDto,
  })
  updateField(@Param('id') id: number) {}

  @Delete(':id')
  @ApiOkResponse({
    description: 'Delete folder successful',
  })
  deleteField(@Param('id') id: number) {}
}
