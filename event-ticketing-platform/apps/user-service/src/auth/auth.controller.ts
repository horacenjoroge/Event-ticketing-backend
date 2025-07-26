// =====================================================
// apps/user-service/src/auth/auth.controller.ts  
// ENHANCED for debugging your microservice approach
// =====================================================
import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginDto } from '../users/dto/create-user.dto';

@Controller()
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {
    this.logger.log('🚀 AuthController initialized - User Service');
  }

  @MessagePattern('auth.register')
  async register(@Payload() createUserDto: CreateUserDto) {
    this.logger.log(`📝 USER SERVICE: Registration request for ${createUserDto.email}`);
    
    try {
      const result = await this.authService.register(createUserDto);
      this.logger.log(`✅ USER SERVICE: Registration successful for ${createUserDto.email}`);
      
      return {
        success: true,
        data: result,
        message: 'User registered successfully',
      };
    } catch (error) {
      this.logger.error(`❌ USER SERVICE: Registration failed for ${createUserDto.email}: ${error.message}`);
      
      return {
        success: false,
        error: error.message,
        message: 'Registration failed',
      };
    }
  }

  @MessagePattern('auth.login')
  async login(@Payload() loginDto: LoginDto) {
    this.logger.log(`🔑 USER SERVICE: Login request for ${loginDto.email}`);
    
    try {
      const result = await this.authService.login(loginDto);
      this.logger.log(`✅ USER SERVICE: Login successful for ${loginDto.email}`);
      this.logger.log(`🔑 TOKEN CREATED: Length ${result.access_token.length} chars`);
      
      return {
        success: true,
        data: result,
        message: 'Login successful',
      };
    } catch (error) {
      this.logger.error(`❌ USER SERVICE: Login failed for ${loginDto.email}: ${error.message}`);
      
      return {
        success: false,
        error: error.message,
        message: 'Login failed',
      };
    }
  }

  @MessagePattern('auth.validate-token')
  async validateToken(@Payload() data: { token: string }) {
    this.logger.log('🔍 USER SERVICE: Token validation request received');
    this.logger.log(`🔍 Token provided: ${data.token ? 'YES' : 'NO'}`);
    
    if (!data.token) {
      this.logger.error('❌ USER SERVICE: No token provided in validation request');
      return {
        success: false,
        error: 'No token provided',
        message: 'Token validation failed',
      };
    }

    this.logger.log(`🔍 Token length: ${data.token.length}`);
    this.logger.log(`🔍 Token (first 50 chars): ${data.token.substring(0, 50)}...`);

    try {
      this.logger.log('🔍 USER SERVICE: Calling authService.validateToken...');
      const user = await this.authService.validateToken(data.token);
      
      if (user) {
        this.logger.log(`✅ USER SERVICE: Token validation successful for user: ${user.email}`);
        this.logger.log(`✅ User data: ID=${user.id}, Role=${user.role}`);
        
        return {
          success: true,
          data: user,
          message: 'Token is valid',
        };
      } else {
        this.logger.warn('❌ USER SERVICE: Token validation failed - invalid token or user not found');
        return {
          success: false,
          error: 'Invalid token',
          message: 'Token validation failed',
        };
      }
    } catch (error) {
      this.logger.error(`❌ USER SERVICE: Exception during token validation: ${error.message}`);
      this.logger.error(`❌ Error stack:`, error.stack);
      
      return {
        success: false,
        error: error.message,
        message: 'Token validation failed',
      };
    }
  }
}
