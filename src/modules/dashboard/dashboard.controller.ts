import { API_VERSION_NUMBER } from '@/contants';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DashboardDto } from './dtos/dashboard.dto';

@Controller({
    path: 'dashboard',
    version: API_VERSION_NUMBER,
  })
  @ApiTags('dashboard')
export class DashboardController {

    @Get ()
    @ApiOkResponse({
      description: 'Get dashboard successful',
      type: DashboardDto
    })
    dashboard() {
    }
}
