// apps/api-gateway/src/auth/jwt-auth.guard.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('No valid authorization token provided');
    }

    try {
      // Extract token from "Bearer <token>"
      const token = authHeader.replace('Bearer ', '');
      
      console.log('🔥 JWT GUARD: Starting validation for token:', token.substring(0, 20) + '...');
      console.log('🔥 JWT GUARD: Sending to USER_SERVICE queue with auth.validate-token pattern');
      
      // Add timeout to catch hanging requests
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('User service timeout after 5 seconds')), 5000);
      });

      // FIX: Use the WORKING auth.validate-token pattern instead of broken user.get-profile
      const validationPromise = firstValueFrom(
        this.userServiceClient.send('auth.validate-token', {
          token: token  // Send just the token, not the full authorization header
        }),
      );

      console.log('🔥 JWT GUARD: Waiting for response from user service...');
      const result = await Promise.race([validationPromise, timeoutPromise]);

      console.log('🔥 JWT GUARD: Received result from USER_SERVICE:', result);

      if (!result.success) {
        console.log('🔥 JWT GUARD: Token validation failed:', result.error);
        throw new UnauthorizedException(result.error || 'Unauthorized');
      }

      console.log('🔥 JWT GUARD: Token validation successful, user:', result.data?.email);

      // Attach user to request object with both id and userId for compatibility
      request.user = {
        ...result.data,
        userId: result.data.id, // Map id to userId for payment controller compatibility
      };
      
      return true;
    } catch (error) {
      console.log('🔥 JWT GUARD: Exception occurred:', error.message);
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('Token validation failed');
    }
  }
}