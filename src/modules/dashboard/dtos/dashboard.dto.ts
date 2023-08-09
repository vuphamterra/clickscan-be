import { ApiProperty } from "@nestjs/swagger";

export class DashboardDto {
    @ApiProperty()
    drawers: number

    @ApiProperty()
    folders: number

    @ApiProperty()
    users: number

    @ApiProperty()
    capacities: number

}