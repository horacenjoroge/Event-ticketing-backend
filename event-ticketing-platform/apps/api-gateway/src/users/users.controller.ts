// apps/api-gateway/src/users/users.controller.ts
import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
  Inject,
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

  // Helper method to validate authentication
  private async validateAuth(authHeader: string) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('No valid authorization token provided');
    }

    const token = authHeader.replace('Bearer ', '');
    console.log('🔥 USERS: Validating token with User Service...');

    const authResult = await firstValueFrom(
      this.userServiceClient.send('auth.validate-token', { token })
    );

    if (!authResult.success) {
      console.log('🔥 USERS: Token validation failed:', authResult.message);
      throw new UnauthorizedException('Invalid or expired token');
    }

    console.log('🔥 USERS: Token validation successful for user:', authResult.data.email);
    return authResult.data;
  }

  @Get('profile')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiResponse({ status: 200, description: 'Profile retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getProfile(@Headers('authorization') authHeader: string) {
    // Validate authentication and get user data directly
    const user = await this.validateAuth(authHeader);

    return {
      message: 'Profile retrieved successfully',
      user: {
        ...user,
        userId: user.id, // For backward compatibility
      },
    };
  }
}