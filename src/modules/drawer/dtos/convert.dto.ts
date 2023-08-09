import { ApiProperty } from "@nestjs/swagger";

export class ConvertDto {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    isKeep: boolean;
}