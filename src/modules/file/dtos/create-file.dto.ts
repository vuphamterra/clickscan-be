import { ApiProperty } from '@nestjs/swagger';

export class CreateFileDto {
  @ApiProperty()
  method: string;
  
  @ApiProperty()
  files: [];
}
