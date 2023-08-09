import { ApiProperty } from '@nestjs/swagger';

export class UpdateDatabaseDto {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  host?: string;

  @ApiProperty()
  port?: string;

  @ApiProperty()
  username?: string;

  @ApiProperty()
  password?: string;

  @ApiProperty()
  database?: string;

  @ApiProperty()
  updated_by?: number;
}
