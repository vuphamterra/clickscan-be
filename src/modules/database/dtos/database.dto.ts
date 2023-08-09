import { ApiProperty } from '@nestjs/swagger';
import type { databases as DB } from '@prisma/client';
export class DatabaseDto implements DB {
  @ApiProperty()
  id: number;

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
  deleted_at: Date;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  created_by: number;

  @ApiProperty()
  updated_by: number;
}
