// apps/user-service/src/users/users.service.ts
import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDto, UserResponseDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,  // ← Added JwtService
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(createUserDto.password, 12);

    // Create user
    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });

    // Return user without password
    const { password, ...userResponse } = user;
    return userResponse;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findById(id: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const { password, ...userResponse } = user;
    return userResponse;
  }

  async validateUser(email: string, password: string) {
    const user = await this.findByEmail(email);
    
    if (user && await bcrypt.compare(password, user.password)) {
      const { password: _, ...result } = user;
      return result;
    }
    
    return null;
  }

  // ← NEW METHOD: Token validation for API Gateway
  async validateToken(token: string): Promise<UserResponseDto | null> {
    try {
      // Verify JWT token
      const payload = this.jwtService.verify(token);
      
      // Get user data by ID from token
      const user = await this.findById(payload.sub);
      
      return user;
    } catch (error) {
      // Token is invalid, expired, or user not found
      return null;
    }
  }
}