import { ApiProperty } from "@nestjs/swagger";


export class DuplicateDrawerDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

}
