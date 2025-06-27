// apps/api-gateway/src/users/users.controller.ts
import {
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Inject,
    UseGuards,
    Request,
  } from '@nestjs/common';
  import { ClientProxy } from '@nestjs/microservices';
  import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
  import { firstValueFrom } from 'rxjs';
  import { AuthGuard } from '../auth/auth.guard';
  
  @ApiTags('Users')
  @Controller('users')
  export class UsersController {
    constructor(
      @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
    ) {}
  
    @Get('profile')
    @UseGuards(AuthGuard)  // ← Requires JWT token
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get current user profile' })
    @ApiResponse({ status: 200, description: 'Profile retrieved successfully' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    async getProfile(@Request() req: any) {
      try {
        // Get user ID from JWT token (added by AuthGuard)
        const userId = req.user.sub;
  
        // Send message to User Service
        const result = await firstValueFrom(
          this.userServiceClient.send('user.find-by-id', { id: userId }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'User not found',
            HttpStatus.NOT_FOUND,
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