import { ApiProperty } from '@nestjs/swagger';

export class UserPasswordDto {

  @ApiProperty()
  current_password: string;

  @ApiProperty()
  new_password: string;

}
