import { ApiProperty } from "@nestjs/swagger";

export class MoveFolderDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    drawerId: number
}