import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class PagingDto {
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  @Transform(({ value }) => Number.parseInt(value, 10))
  public skip: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  @Transform(({ value }) => Number.parseInt(value, 10))
  public take: number;
}
