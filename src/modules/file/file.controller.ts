import { API_VERSION_NUMBER } from '@/contants';
import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateFileDto } from './dtos/create-file.dto';

@Controller({
  path: 'file',
  version: API_VERSION_NUMBER,
})
@ApiTags('file')
export class FileController {

    @Post()
    @ApiCreatedResponse({
      description: 'Create file successful',
    })
    create(@Body() data: CreateFileDto) {
    }

    @Delete(':id')
    @ApiOkResponse({
      description: 'Delete file successful',
    })
    delete(@Param('id') id: number) {
    }

}
