import { ApiProperty } from "@nestjs/swagger";

export class FolderDto {

    @ApiProperty()
    id: number

    @ApiProperty()
    name: string;

}