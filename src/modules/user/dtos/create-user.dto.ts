import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserDto{

    @IsEmail()
    @ApiProperty()
    email: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    created_by: number;

    @ApiProperty()
    role_id: number;
}
