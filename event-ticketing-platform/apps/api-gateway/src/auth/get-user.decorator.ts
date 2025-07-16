// apps/api-gateway/src/auth/get-user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    // If a specific property is requested, return just that property
    return data ? user?.[data] : user;
  },
);

// You can now use it as:
// @GetUser() user: any  - gets full user object
// @GetUser('id') userId: string  - gets just user.id
// @GetUser('email') email: string  - gets just user.email