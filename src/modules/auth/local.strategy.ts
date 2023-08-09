import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import type { AuthDto } from './dtos/auth.dto';
import { AuthService } from './services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(authDto: AuthDto): Promise<any> {
    const user = await this.authService.validateUser(authDto);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
