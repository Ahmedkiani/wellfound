import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserAssignedToRequest } from 'wellfound/auth-manager/jwt.interface';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): UserAssignedToRequest => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
