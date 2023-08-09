import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { ResponseOK } from '@/common/dtos/response-ok.dto';
import { API_VERSION_NUMBER, EApiPath } from '@/contants';

import { RoleDto } from './dtos/role.dto';
import { RoleService } from './role.service';

@Controller({
    path: EApiPath.ROLE ,
    version: API_VERSION_NUMBER,
  })
@ApiTags(EApiPath.ROLE)
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Get('list')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Done' })
  @ApiOkResponse({
    description: 'Get roles seccessful',
    type: [RoleDto],
  })
  async getDatabaseList(
    @Query('skip', ParseIntPipe) skip: number | 0,
    @Query('take', ParseIntPipe) take: number | 10,
  ) {
    const data = await this.roleService.getRoleList({ skip, take });

    return new ResponseOK(HttpStatus.OK, 'Get roles successful', data);
  }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Done' })
    @ApiOkResponse({
      description: 'Get role successful',
      type: RoleDto,
    })
    async getRoleById(@Param('id', ParseIntPipe) id: number) {
      const data = await this.roleService.getById(id);

      return new ResponseOK(HttpStatus.OK, 'Get role successful', data);
    }
}
