import {
  ConflictException,
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import type { users as User, users } from '@prisma/client';
import bcrypt from 'bcrypt';

import type { PagingDto } from '@/common/dtos/paging.dto';
import { generateHash, hasWhiteSpace } from '@/common/utils';
import { UserNotFoundException } from '@/exceptions';
import { PrismaService } from '@/prisma/prisma.service';

import type { CreateUserDto } from './dtos/create-user.dto';
import type { UserDto } from './dtos/user.dto';
import type { UserPasswordDto } from './dtos/user-password.dto';
import type { UserResetPasswordDto } from './dtos/user-reset-password.dto';
import type { UpdateDto } from './dtos/user-update.dto';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const uname = createUserDto.username;

    if (hasWhiteSpace(uname) || uname.length < 4 || uname.length > 16) {
      throw new NotAcceptableException('Username incorrect');
    }

    const existUsername = await this.getUserInfoByUsername(
      createUserDto.username
    );
    const existEmail = await this.getUserInfoByEmail(createUserDto.email);
    const passwordLength = createUserDto.password.length;

    if (existUsername) {
      throw new ConflictException('Username already exist');
    }

    if (existEmail) {
      throw new ConflictException('Email already exist');
    }

    if (passwordLength < 8) {
      throw new NotAcceptableException('Password too short');
    }

    const result = await this.prisma.users.create({
      data: {
        email: createUserDto.email,
        username: createUserDto.username,
        password: generateHash(createUserDto.password),
        description: createUserDto.description,
        created_by: createUserDto.created_by,
        updated_by: createUserDto.created_by,
        roles: {
          create: [
            {
              role_id: createUserDto.role_id,
              created_by: createUserDto.created_by,
              updated_by: createUserDto.created_by,
            },
          ],
        },
      },
    });

    return result;
  }

  async getUserInfoByUsername(username: string): Promise<User | null> {
    const data = await this.prisma.users.findFirst({
      where: { username },
    });

    return data;
  }

  async getUserInfoByEmail(email: string): Promise<User | null> {
    const data = await this.prisma.users.findFirst({ where: { email } });

    return data;
  }

  async getUsers({ skip, take }: PagingDto): Promise<User[] | null> {
    const data = await this.prisma.users.findMany({
      where: { username: { not: 'superadmin' } },
      take,
      skip,
    });

    return data;
  }

  async findUserForAuth(query: Record<string, any>): Promise<UserDto | any> {
    const data = await this.prisma.users.findFirst({ where: query });

    if (!data) {
      throw new NotFoundException('Credential not found');
    }

    return data;
  }

  async getForAuth(userId: any): Promise<User> {
    await this.prisma.users.findFirst({ where: userId });

    const result = await this.findUserForAuth({ id: userId });

    if (!result) {
      throw new UserNotFoundException('User not found!');
    }

    return result;
  }

  async getUserGeneralById(id: number): Promise<User[]> {
    const data = await this.prisma.users.findMany({
      where: { id },
      include: {
        roles: {
          include: {
            role: true,
          },
        },
        databases: {
          include: {
            database: true,
          },
        },
      },
    });
    const result = data.map((value) => ({
      ...value,
      roles: value.roles.map((role) => role.role),
      databases: value.databases.map((db) => db.database),
    }));

    return result;
  }

  async getUserById(id: number): Promise<User | null> {
    const result = await this.prisma.users.findFirst({
      where: { id },
    });

    if (!result) {
      throw new NotFoundException('User not found');
    }

    return result;
  }

  async updateUserById(
    id: number,
    updateDto: UpdateDto
  ): Promise<users | null> {
    const found = await this.getUserById(id);
    let result: any;

    if (found) {
      result = await this.prisma.users.update({
        where: { id },
        data: {
          ...updateDto,
        },
      });
    }

    return result;
  }

  async changePassword(
    id: number,
    userPasswordDto: UserPasswordDto
  ): Promise<users | null> {
    const found = await this.getUserById(id);
    let result: any;

    const isMatch = await bcrypt.compare(
      userPasswordDto.current_password,
      found?.password
    );

    if (!isMatch) {
      throw new NotFoundException('Current password is not match');
    }

    result = result = await this.prisma.users.update({
      where: { id },
      data: {
        password: generateHash(userPasswordDto.new_password),
      },
    });

    return result;
  }

  async resetPassword(
    id: number,
    userResetPasswordDto: UserResetPasswordDto
  ): Promise<users | null> {
    const found = await this.getUserById(id);
    let result: any;

    if (found) {
      result = await this.prisma.users.update({
        where: { id },
        data: {
          password: generateHash('P@ssw0rd'),
          updated_by: userResetPasswordDto.update_by,
        },
      });
    }

    return result;
  }
}
