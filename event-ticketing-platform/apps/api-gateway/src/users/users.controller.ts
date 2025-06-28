// apps/api-gateway/src/users/users.controller.ts
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Headers,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  @Get('profile')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiResponse({ status: 200, description: 'Profile retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getProfile(@Headers('authorization') authorization?: string) {
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      // Forward token to User Service for validation
      const result = await firstValueFrom(
        this.userServiceClient.send('user.get-profile', { 
          authorization 
        }),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Unauthorized',
          HttpStatus.UNAUTHORIZED,
        );
      }

      return {
        message: 'Profile retrieved successfully',
        user: result.data,
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