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
    try {
      const user = await this.authService.validateToken(data.token);
      return {
        success: !!user,
        data: user,
        message: user ? 'Token is valid' : 'Invalid token',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Token validation failed',
      };
    }
  }
}