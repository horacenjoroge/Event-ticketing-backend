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
        // Use the same pattern as your users controller
        const result = await firstValueFrom(
          this.userServiceClient.send('user.get-profile', { 
            authorization: authHeader 
          }),
        );
  
        if (!result.success) {
          throw new UnauthorizedException(result.error || 'Unauthorized');
        }
  
        // Attach user to request object for @GetUser() decorator
        request.user = result.data;
        return true;
      } catch (error) {
        if (error instanceof UnauthorizedException) {
          throw error;
        }
        throw new UnauthorizedException('Token validation failed');
      }
    }
  }