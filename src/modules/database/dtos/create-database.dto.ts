import { ApiProperty } from '@nestjs/swagger';

export class CreateDatabaseDto {

  @ApiProperty()
  connection: string;

  @ApiProperty()
  host: string;

  @ApiProperty()
  port: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  schema: string;

  @ApiProperty()
  created_by: number;
}
