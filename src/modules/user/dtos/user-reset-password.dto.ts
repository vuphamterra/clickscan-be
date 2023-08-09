import { ApiProperty } from '@nestjs/swagger';

export class UserResetPasswordDto {

  @ApiProperty()
  update_by: number;

}
