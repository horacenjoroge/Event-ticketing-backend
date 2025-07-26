// apps/user-service/src/auth/auth.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginDto } from '../users/dto/create-user.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('auth.register')
  async register(@Payload() createUserDto: CreateUserDto) {
    try {
      const result = await this.authService.register(createUserDto);
      return {
        success: true,
        data: result,
        message: 'User registered successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Registration failed',
      };
    }
  }

  @MessagePattern('auth.login')
  async login(@Payload() loginDto: LoginDto) {
    try {
      const result = await this.authService.login(loginDto);
      return {
        success: true,
        data: result,
        message: 'Login successful',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Login failed',
      };
    }
  }

  @MessagePattern('auth.validate-token')
  async validateToken(@Payload() data: { token: string }) {
    console.log('🔥 AUTH CONTROLLER: Received auth.validate-token request:', JSON.stringify(data));
    console.log('🔥 AUTH CONTROLLER: Token length:', data.token?.length || 'undefined');
    
    try {
      console.log('🔥 AUTH CONTROLLER: Calling authService.validateToken...');
      const user = await this.authService.validateToken(data.token);
      console.log('🔥 AUTH CONTROLLER: Auth service returned:', user ? 'User found' : 'User not found');
      console.log('🔥 AUTH CONTROLLER: User details:', user ? { id: user.id, email: user.email } : 'null');
      
      const response = {
        success: !!user,
        data: user,
        message: user ? 'Token is valid' : 'Invalid token',
      };
      
      console.log('🔥 AUTH CONTROLLER: Returning response:', { success: response.success, message: response.message });
      return response;
    } catch (error) {
      console.log('🔥 AUTH CONTROLLER: Exception in validateToken:', error.message);
      console.log('🔥 AUTH CONTROLLER: Exception stack:', error.stack);
      
      const errorResponse = {
        success: false,
        error: error.message,
        message: 'Token validation failed',
      };
      
      console.log('🔥 AUTH CONTROLLER: Returning error response:', errorResponse);
      return errorResponse;
    }
  }
}