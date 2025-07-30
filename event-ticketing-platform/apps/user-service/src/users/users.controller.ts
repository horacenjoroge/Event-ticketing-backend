// =====================================================
// apps/user-service/src/users/users.controller.ts
// ENHANCED with Prometheus metrics
// =====================================================
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto, LoginDto } from './dto/create-user.dto';
import { usersRegistered, errors } from '@app/common';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('user.register')
  async register(@Payload() createUserDto: CreateUserDto) {
    try {
      const user = await this.usersService.create(createUserDto);
      
      // Track business metric
      usersRegistered.inc({ service: 'user-service' });
      
      return {
        success: true,
        data: user,
        message: 'User registered successfully',
      };
    } catch (error) {
      // Track error metric
      errors.inc({ 
        service: 'user-service', 
        error_type: 'user_creation_failed', 
        route: 'user.register' 
      });
      
      return {
        success: false,
        error: error.message,
        message: 'User registration failed',
      };
    }
  }

  @MessagePattern('user.find-by-email')
  async findByEmail(@Payload() data: { email: string }) {
    try {
      const user = await this.usersService.findByEmail(data.email);
      return {
        success: true,
        data: user,
      };
    } catch (error) {
      // Track error metric
      errors.inc({ 
        service: 'user-service', 
        error_type: 'user_find_by_email_failed', 
        route: 'user.find-by-email' 
      });
      
      return {
        success: false,
        error: error.message,
      };
    }
  }

  @MessagePattern('user.find-by-id')
  async findById(@Payload() data: { id: string }) {
    try {
      const user = await this.usersService.findById(data.id);
      return {
        success: true,
        data: user,
      };
    } catch (error) {
      // Track error metric
      errors.inc({ 
        service: 'user-service', 
        error_type: 'user_find_by_id_failed', 
        route: 'user.find-by-id' 
      });
      
      return {
        success: false,
        error: error.message,
      };
    }
  }

  @MessagePattern('user.validate')
  async validateUser(@Payload() loginDto: LoginDto) {
    try {
      const user = await this.usersService.validateUser(loginDto.email, loginDto.password);
      return {
        success: !!user,
        data: user,
        message: user ? 'User validated successfully' : 'Invalid credentials',
      };
    } catch (error) {
      // Track error metric
      errors.inc({ 
        service: 'user-service', 
        error_type: 'user_validation_failed', 
        route: 'user.validate' 
      });
      
      return {
        success: false,
        error: error.message,
        message: 'User validation failed',
      };
    }
  }

  // ← NEW METHOD: Handle profile requests from API Gateway
  @MessagePattern('user.get-profile')
  async getProfile(@Payload() data: { authorization: string }) {
    console.log('🔥 RECEIVED user.get-profile request:', data);
    try {
      if (!data.authorization) {
        console.log('❌ No authorization header');
        
        // Track error metric
        errors.inc({ 
          service: 'user-service', 
          error_type: 'authorization_missing', 
          route: 'user.get-profile' 
        });
        
        return { success: false, error: 'Authorization header required' };
      }
      
      const token = data.authorization.replace('Bearer ', '');
      console.log('🔑 Extracted token:', token.substring(0, 20) + '...');
      
      const user = await this.usersService.validateToken(token);
      console.log('👤 User validation result:', !!user);
      
      if (!user) {
        console.log('❌ Invalid token');
        
        // Track error metric
        errors.inc({ 
          service: 'user-service', 
          error_type: 'profile_token_invalid', 
          route: 'user.get-profile' 
        });
        
        return { success: false, error: 'Invalid or expired token' };
      }
      
      console.log('✅ Returning user profile');
      return { success: true, data: user };
    } catch (error) {
      console.log('💥 Handler error:', error.message);
      
      // Track error metric
      errors.inc({ 
        service: 'user-service', 
        error_type: 'profile_retrieval_error', 
        route: 'user.get-profile' 
      });
      
      return { success: false, error: error.message };
    }
  }
}