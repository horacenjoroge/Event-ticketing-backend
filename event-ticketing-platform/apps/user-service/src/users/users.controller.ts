// apps/user-service/src/users/users.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto, LoginDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('user.register')
  async register(@Payload() createUserDto: CreateUserDto) {
    try {
      const user = await this.usersService.create(createUserDto);
      return {
        success: true,
        data: user,
        message: 'User registered successfully',
      };
    } catch (error) {
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
      return {
        success: false,
        error: error.message,
        message: 'User validation failed',
      };
    }
  }
}