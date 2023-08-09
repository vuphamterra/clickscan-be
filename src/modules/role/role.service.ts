import { Injectable, NotFoundException } from '@nestjs/common';
import type { roles } from '@prisma/client';

import type { PagingDto } from '@/common/dtos/paging.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async getById(id: number): Promise<roles | null> {
    const result = await this.prisma.roles.findFirst({ where: { id } });

    if (!result) {
      throw new NotFoundException('Role not found');
    }

    return result;
  }

  async getRoleList({ skip, take }: PagingDto): Promise<roles[]> {
    const result = await this.prisma.roles.findMany({
      take,
      skip,
    });

    return result;
  }
}
