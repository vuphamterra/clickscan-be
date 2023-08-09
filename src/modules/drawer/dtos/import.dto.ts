import { ApiProperty } from "@nestjs/swagger";

export class ImportDto {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    path: string;

    @ApiProperty()
    isKeep: boolean;

    @ApiProperty()
    fieldMapping: [];
}