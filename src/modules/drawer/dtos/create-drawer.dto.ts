import { ApiProperty } from '@nestjs/swagger';
import { FieldDto } from '@/modules/field/dtos/field.dto';

export class CreateDrawerDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  is_fulltext: boolean;

  @ApiProperty()
  img_path: string;

  @ApiProperty()
  secure_path: boolean;

  @ApiProperty()
  fields: Array<FieldDto>;
}
