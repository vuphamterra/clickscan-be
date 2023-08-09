import { ApiProperty } from '@nestjs/swagger';

export class LoginSucessDto {
  @ApiProperty()
  access_token: string;
}
