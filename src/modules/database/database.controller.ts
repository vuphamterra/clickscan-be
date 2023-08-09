import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { ResponseOK } from '@/common/dtos/response-ok.dto';
import { API_VERSION_NUMBER, EApiPath } from '@/contants';

import { DatabaseService } from './database.service';
import { CreateDatabaseDto } from './dtos/create-database.dto';
import { DatabaseDto } from './dtos/database.dto';
import { UpdateDatabaseDto } from './dtos/update-database.dto';

@Controller({
  path: EApiPath.DATABASE,
  version: API_VERSION_NUMBER,
})
@ApiTags(EApiPath.DATABASE)
export class DatabaseController {
  constructor(private databaseService: DatabaseService) {}

  @Get('list')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Done' })
  @ApiOkResponse({
    description: 'Get all database',
    type: [DatabaseDto],
  })
  async getDatabaseList(
    @Query('skip', ParseIntPipe) skip: number | 0,
    @Query('take', ParseIntPipe) take: number | 10
  ) {
    const data = await this.databaseService.getAll({ skip, take });

    return new ResponseOK(HttpStatus.OK, 'Get databases successful', data);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Done' })
  @ApiOkResponse({
    description: 'Create database successful',
    type: DatabaseDto,
  })
  async createDatabase(@Body() createDatabaseDto: CreateDatabaseDto) {
    const data = await this.databaseService.create(createDatabaseDto);

    return new ResponseOK(HttpStatus.OK, 'Create database successful', data);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Done' })
  @ApiOkResponse({
    description: 'Get database successful',
    type: DatabaseDto,
  })
  async getDatabaseById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.databaseService.getById(id);

    return new ResponseOK(HttpStatus.OK, 'Get database successful', data);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Done' })
  @ApiOkResponse({
    description: 'Update database successful',
    type: DatabaseDto,
  })
  async updateDatbase(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDatabaseDto: UpdateDatabaseDto
  ) {
    const data = await this.databaseService.updateById(id, updateDatabaseDto);

    return new ResponseOK(HttpStatus.OK, 'Update database successful', data);
  }
}
