import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,
} from '@nestjs/common';

import type { PagingDto } from '@/common/dtos/paging.dto';
import { PrismaService } from '@/prisma/prisma.service';

import type { CreateDatabaseDto } from './dtos/create-database.dto';
import type { UpdateDatabaseDto } from './dtos/update-database.dto';
import type { databases } from '.prisma/client';

@Injectable()
export class DatabaseService {
    constructor(private prisma: PrismaService) {}

    async create(
        createDatabaseDto: CreateDatabaseDto
    ): Promise<databases | null> {
        let result: any = null;

        result = await this.prisma.databases.create({
            data: {
                connection: createDatabaseDto.connection,
                host: createDatabaseDto.host,
                port: createDatabaseDto.port,
                username: createDatabaseDto.username,
                password: createDatabaseDto.password,
                schema: createDatabaseDto.schema,
                created_by: createDatabaseDto.created_by,
                updated_by: createDatabaseDto.created_by,
                users: {
                    create: [
                        {
                            user_id: createDatabaseDto.created_by,
                            created_by: createDatabaseDto.created_by,
                            updated_by: createDatabaseDto.created_by,
                        },
                    ],
                },
            },
        });

        if (!result) {
            throw new HttpException(
                'Create database failed',
                HttpStatus.UNPROCESSABLE_ENTITY
            );
        }

        return result;
    }

    async getById(id: number): Promise<databases | null> {
        const result = await this.prisma.databases.findFirst({ where: { id } });

        if (!result) {
            throw new NotFoundException('Database not found');
        }

        return result;
    }

    async updateById(
        id: number,
        updateDatabaseDto: UpdateDatabaseDto
    ): Promise<databases | null> {
        let result: any = null;
        let found: any = null;

        found = await this.getById(id);

        if (found) {
            result = await this.prisma.databases.update({
                where: { id },
                data: updateDatabaseDto,
            });
        }

        return result;
    }

    async getAll({ skip, take }: PagingDto): Promise<databases[]> {
        const result = await this.prisma.databases.findMany({
            take,
            skip,
        });

        return result;
    }
}
