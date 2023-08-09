import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { ResponseOK } from '@/common/dtos/response-ok.dto';
import { API_VERSION_NUMBER, EApiPath } from '@/contants';

import { AuthDto } from './dtos/auth.dto';
import { AuthService } from './services/auth.service';

@Controller({
  path: EApiPath.AUTH,
  version: API_VERSION_NUMBER,
})
@ApiTags(EApiPath.AUTH)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Done' })
  @ApiOkResponse({
    description: 'Login successful',
    type: ResponseOK,
  })
  async login(@Body() authDto: AuthDto) {
    const userInfo = await this.authService.login(authDto);

    return new ResponseOK(HttpStatus.OK, 'Login successfully', userInfo);
  }
}
