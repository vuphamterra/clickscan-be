import { ApiProperty } from '@nestjs/swagger';

export class DrawerDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  image_path: string;

  @ApiProperty()
  fulltext: boolean;

  @ApiProperty()
  deleted_at: Date | null;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  created_by: string | null;

  @ApiProperty()
  updated_by: string | null;
}


