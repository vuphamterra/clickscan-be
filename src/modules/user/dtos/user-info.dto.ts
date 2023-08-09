import { ApiProperty } from '@nestjs/swagger';
import type { users as User } from '@prisma/client';

export class UserInfoDto implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  deleted_at: Date | null;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  created_by: number;

  @ApiProperty()
  updated_by: number;

  @ApiProperty()
  role_id: number;

  @ApiProperty()
  database: number[];
}
