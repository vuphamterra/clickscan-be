import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UserService } from '@/modules/user/user.service';

import type { AuthDto, CheckAuthDto } from '../dtos/auth.dto';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(authDto: AuthDto) {
    const user = await this.userService.findUserForAuth({
      email: authDto.email,
    });

    const isMatch = await bcrypt.compare(authDto.password, user.password);

    if (user && isMatch === false) {
      throw new NotFoundException('Credential not found');
    }

    return user;
  }

  async login(authDto: AuthDto) {
    const payload = { email: authDto.email };
    const userValid = await this.validateUser(authDto);
    const userId: number = userValid.id;

    const data = await this.userService.getUserGeneralById(userId);

    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
    const { password: _, ...result } = data[0];

    return {
      access_token: this.jwtService.sign(payload),
      user_info: { ...result },
    };
  }

  async checkAuth(checkAuthDto: CheckAuthDto) {
    const user = await this.userService.findUserForAuth({
      email: checkAuthDto.role,
    });

    return user;
  }
}
