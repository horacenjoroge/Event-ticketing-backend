// apps/api-gateway/src/auth/auth.controller.ts
import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { IsEmail, IsString, MinLength, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// Simple DTOs - just for HTTP validation
export class RegisterDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123', minLength: 6 })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'John' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'CUSTOMER', enum: ['CUSTOMER', 'ORGANIZER'], required: false })
  @IsEnum(['CUSTOMER', 'ORGANIZER'])
  @IsOptional()
  role?: 'CUSTOMER' | 'ORGANIZER' = 'CUSTOMER';
}

export class LoginDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  password: string;
}

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User registered successfully' })
  @ApiResponse({ status: 409, description: 'User already exists' })
  async register(@Body() registerDto: RegisterDto) {
    try {
      // Just forward to User Service - no auth logic here
      const result = await firstValueFrom(
        this.userServiceClient.send('auth.register', registerDto),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Registration failed',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        user: result.data.user,
        access_token: result.data.access_token,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({ status: 200, description: 'Login successful' })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  async login(@Body() loginDto: LoginDto) {
    try {
      // Just forward to User Service - no auth logic here
      const result = await firstValueFrom(
        this.userServiceClient.send('auth.login', loginDto),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Login failed',
          HttpStatus.UNAUTHORIZED,
        );
      }

      return {
        message: result.message,
        user: result.data.user,
        access_token: result.data.access_token,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}