import { ApiProperty } from '@nestjs/swagger';

export class LogoutSucessDto {
  @ApiProperty()
  massage: string;
}
