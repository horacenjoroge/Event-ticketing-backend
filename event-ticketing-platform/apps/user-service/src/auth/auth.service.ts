// apps/user-service/src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { LoginDto, CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    const payload = { sub: user.id, email: user.email, role: user.role };
    
    console.log('🔥 AUTH SERVICE: Creating token during registration with secret (first 10 chars):', 
      this.configService.get<string>('JWT_SECRET')?.substring(0, 10) || 'UNDEFINED');
    
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.validateUser(loginDto.email, loginDto.password);
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    
    console.log('🔥 AUTH SERVICE: Creating token during login with secret (first 10 chars):', 
      this.configService.get<string>('JWT_SECRET')?.substring(0, 10) || 'UNDEFINED');
    
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateToken(token: string) {
    try {
      console.log('🔥 AUTH SERVICE: Validating token:', token.substring(0, 20) + '...');
      
      // Debug: Check what secret the JwtService is actually using
      const envSecret = process.env.JWT_SECRET;
      console.log('🔥 AUTH SERVICE: Environment JWT_SECRET:', envSecret?.substring(0, 10));
      
      // Try manual verification first
      const jwt = require('jsonwebtoken');
      try {
        const manualPayload = jwt.verify(token, envSecret);
        console.log('🔥 AUTH SERVICE: Manual JWT verification SUCCESS:', manualPayload);
      } catch (manualError) {
        console.log('🔥 AUTH SERVICE: Manual JWT verification FAILED:', manualError.message);
      }
      
      // Now try with JwtService
      const payload = this.jwtService.verify(token);
      console.log('🔥 AUTH SERVICE: JwtService verification successful, payload:', payload);
      
      const user = await this.usersService.findById(payload.sub);
      console.log('🔥 AUTH SERVICE: User lookup result:', user ? 'Found' : 'Not found');
      
      return user;
    } catch (error) {
      console.log('🔥 AUTH SERVICE: Token validation error:', error.message);
      console.log('🔥 AUTH SERVICE: Error details:', error);
      return null;
    }
  }
}