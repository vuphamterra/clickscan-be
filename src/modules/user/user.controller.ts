import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { ResponseOK } from '@/common/dtos/response-ok.dto';
import { API_VERSION_NUMBER, EApiPath } from '@/contants';

import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { UserPasswordDto } from './dtos/user-password.dto';
import { UserResetPasswordDto } from './dtos/user-reset-password.dto';
import { UpdateDto } from './dtos/user-update.dto';
import { UserService } from './user.service';

@Controller({
  path: EApiPath.USER,
  version: API_VERSION_NUMBER,
})
@ApiTags(EApiPath.USER)
export class UserController {
  constructor(private userService: UserService) {}

  @Get('list')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Done' })
  @ApiFoundResponse({
    description: 'Get all users',
    type: [UserDto],
  })
  async getUsers(
    @Query('skip', ParseIntPipe) skip: number,
    @Query('take', ParseIntPipe) take: number
  ) {
    const data = await this.userService.getUsers({ skip, take });

    return new ResponseOK(HttpStatus.OK, 'Get users successful', data);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Done' })
  @ApiOkResponse({
    description: 'Get user successful',
    type: UserDto,
  })
  async getDatabaseById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.userService.getUserById(id);

    return new ResponseOK(HttpStatus.OK, 'Get user successful', data);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Done' })
  @ApiOkResponse({
    description: 'Update user successful',
    type: [UserDto],
  })
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateDto
  ) {
    const data = await this.userService.updateUserById(id, updateDto);

    return new ResponseOK(HttpStatus.OK, 'Update user successful', data);
  }

  @Patch(':id/change-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Done' })
  @ApiOkResponse({
    description: 'Change password successful',
    type: [UserDto],
  })
  async changeUserPassword(
    @Param('id', ParseIntPipe) id: number,
    @Body() userPasswordDto: UserPasswordDto
  ) {
    const data = await this.userService.changePassword(id, userPasswordDto);

    return new ResponseOK(HttpStatus.OK, 'Change password successful', data);
  }

  @Patch(':id/reset-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Done => P@ssw0rd' })
  @ApiOkResponse({
    description: 'Reset password successful',
    type: [UserDto],
  })
  async resetUserPassword(
    @Param('id', ParseIntPipe) id: number,
    @Body() userResetPasswordDto: UserResetPasswordDto
  ) {
    const data = await this.userService.resetPassword(id, userResetPasswordDto);

    return new ResponseOK(HttpStatus.OK, 'Reset password successful', data);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Done' })
  @ApiFoundResponse({
    description: 'Create a new user',
    type: [UserDto],
  })
  async createUser(@Body() createUserDto: CreateUserDto) {
    const data = await this.userService.create(createUserDto);

    return new ResponseOK(HttpStatus.OK, 'Create user successful', data);
  }
}
