// =====================================================
// apps/api-gateway/src/users/users.controller.ts
// YOUR APPROACH - Direct microservice communication
// =====================================================
import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
  Inject,
  Logger,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { firstValueFrom, timeout } from 'rxjs';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  // Helper method to validate authentication with User Service
  private async validateAuth(authHeader: string) {
    this.logger.log('🔍 USERS CONTROLLER: Starting auth validation');
    this.logger.log(`🔍 Auth header present: ${authHeader ? 'YES' : 'NO'}`);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      this.logger.warn('❌ USERS CONTROLLER: No valid authorization token provided');
      throw new UnauthorizedException('No valid authorization token provided');
    }

    const token = authHeader.replace('Bearer ', '');
    this.logger.log(`🔍 USERS CONTROLLER: Extracted token (length: ${token.length})`);
    this.logger.log(`🔍 Token (first 50 chars): ${token.substring(0, 50)}...`);

    try {
      this.logger.log('📤 USERS CONTROLLER: Sending validation request to USER_SERVICE');
      
      const authResult = await firstValueFrom(
        this.userServiceClient.send('auth.validate-token', { token }).pipe(
          timeout(10000) // 10 second timeout
        )
      );

      this.logger.log('📥 USERS CONTROLLER: Received response from USER_SERVICE');
      this.logger.log(`📥 Validation success: ${authResult?.success}`);
      this.logger.log(`📥 Response message: ${authResult?.message}`);

      if (!authResult.success) {
        this.logger.warn(`❌ USERS CONTROLLER: Token validation failed: ${authResult.message}`);
        throw new UnauthorizedException('Invalid or expired token');
      }

      this.logger.log(`✅ USERS CONTROLLER: Token validation successful for user: ${authResult.data?.email}`);
      return authResult.data;
    } catch (error) {
      this.logger.error(`❌ USERS CONTROLLER: Auth validation error: ${error.message}`);
      
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      
      throw new UnauthorizedException('Token validation failed');
    }
  }

  @Get('profile')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiResponse({ status: 200, description: 'Profile retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getProfile(@Headers('authorization') authHeader: string) {
    this.logger.log('🔥 PROFILE ENDPOINT: Request received');
    
    // Validate authentication and get user data directly from User Service
    const user = await this.validateAuth(authHeader);

    this.logger.log(`✅ PROFILE ENDPOINT: Returning profile for user: ${user.email}`);

    return {
      message: 'Profile retrieved successfully',
      user: {
        ...user,
        userId: user.id, // For backward compatibility
      },
    };
  }
}