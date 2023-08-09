import { ApiProperty } from '@nestjs/swagger';

export class FieldDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  width: string;

  @ApiProperty()
  format: string;

  @ApiProperty()
  redflag: JSON;
}
