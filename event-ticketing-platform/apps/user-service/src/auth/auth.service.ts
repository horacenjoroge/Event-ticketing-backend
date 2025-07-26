// =====================================================
// apps/user-service/src/auth/auth.service.ts
// VERIFY this has the fixed login method
// =====================================================
import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { LoginDto, CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {
    const jwtSecret = this.configService.get<string>('JWT_SECRET');
    this.logger.log('🔧 USER SERVICE AuthService initialized');
    this.logger.log(`🔧 JWT_SECRET available: ${jwtSecret ? 'YES' : 'NO'}`);
    this.logger.log(`🔧 JWT_SECRET (first 20 chars): ${jwtSecret?.substring(0, 20) || 'UNDEFINED'}`);
  }

  async register(createUserDto: CreateUserDto) {
    this.logger.log(`📝 USER SERVICE: Registering user ${createUserDto.email}`);
    
    const user = await this.usersService.create(createUserDto);
    const payload = { sub: user.id, email: user.email, role: user.role };
    
    this.logger.log('🔥 USER SERVICE: Creating JWT token for registration');
    this.logger.log(`🔥 Token payload: ${JSON.stringify(payload)}`);
    
    const token = this.jwtService.sign(payload);
    this.logger.log(`🔥 Token created: length ${token.length} chars`);
    
    return {
      user,
      access_token: token,
    };
  }

  async login(loginDto: LoginDto) {
    this.logger.log(`🔑 USER SERVICE: Login attempt for ${loginDto.email}`);
    
    const user = await this.usersService.validateUser(loginDto.email, loginDto.password);
    
    if (!user) {
      this.logger.warn(`❌ USER SERVICE: Invalid credentials for ${loginDto.email}`);
      throw new Error('Invalid credentials');
    }

    // 🔥 FIXED: Make sure this is correct (not user.role in email field)
    const payload = { sub: user.id, email: user.email, role: user.role };
    
    this.logger.log('🔥 USER SERVICE: Creating JWT token for login');
    this.logger.log(`🔥 Token payload: ${JSON.stringify(payload)}`);
    
    const token = this.jwtService.sign(payload);
    this.logger.log(`🔥 Token created: length ${token.length} chars`);
    this.logger.log(`🔥 Token (first 50 chars): ${token.substring(0, 50)}...`);
    
    return {
      user,
      access_token: token,
    };
  }

  async validateToken(token: string) {
    this.logger.log('🔍 USER SERVICE: Starting token validation');
    this.logger.log(`🔍 Token length: ${token.length}`);
    
    try {
      const jwtSecret = this.configService.get<string>('JWT_SECRET');
      this.logger.log(`🔍 JWT_SECRET available: ${jwtSecret ? 'YES' : 'NO'}`);
      
      if (!jwtSecret) {
        this.logger.error('❌ USER SERVICE: JWT_SECRET not found in configuration');
        return null;
      }

      this.logger.log('🔍 USER SERVICE: Verifying token with JwtService');
      const payload = this.jwtService.verify(token);
      this.logger.log(`✅ USER SERVICE: Token verification successful`);
      this.logger.log(`✅ Decoded payload: ${JSON.stringify(payload)}`);
      
      this.logger.log(`🔍 USER SERVICE: Looking up user with ID: ${payload.sub}`);
      const user = await this.usersService.findById(payload.sub);
      
      if (user) {
        this.logger.log(`✅ USER SERVICE: User found: ${user.email}`);
        return user;
      } else {
        this.logger.warn(`❌ USER SERVICE: User not found for ID: ${payload.sub}`);
        return null;
      }
      
    } catch (error) {
      this.logger.error(`❌ USER SERVICE: Token validation error: ${error.message}`);
      this.logger.error(`❌ Error type: ${error.constructor.name}`);
      
      if (error.name === 'JsonWebTokenError') {
        this.logger.error('❌ Invalid JWT token format');
      } else if (error.name === 'TokenExpiredError') {
        this.logger.error('❌ JWT token has expired');
      } else if (error.name === 'NotBeforeError') {
        this.logger.error('❌ JWT token not active yet');
      }
      
      return null;
    }
  }
}