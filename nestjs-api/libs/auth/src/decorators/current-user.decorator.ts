import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { getCurrentUser } from '../helpers/get-current-user';

export const CurrentUser = createParamDecorator(
  (_, context: ExecutionContext) => {
    const currentUser = getCurrentUser(context);

    return currentUser;
  },
);
