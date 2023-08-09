import { ApiProperty } from '@nestjs/swagger';

export class UpdateDto{

  @ApiProperty()
  description: string;

  @ApiProperty()
  updated_by: number;

}
