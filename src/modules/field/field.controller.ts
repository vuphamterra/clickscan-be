import { API_VERSION_NUMBER } from '@/contants';
import { Controller, Delete, Param, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FieldDto } from './dtos/field.dto';

@Controller({
    path: 'field',
    version: API_VERSION_NUMBER,
  })
@ApiTags('field')
export class FieldController {

    @Put(':id')
    @ApiOkResponse({
      description: 'Update Field successful',
      type: FieldDto,
    })
    updateField(@Param('id') id: string) {
    }

    @Delete(':id')
    @ApiOkResponse({
      description: 'Delete field successful',
    })
    deleteField(@Param('id') id: string) {
    }

}
