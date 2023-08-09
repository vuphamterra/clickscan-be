import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
export class CheckAuthDto {
  @ApiProperty()
  role: string;
}
