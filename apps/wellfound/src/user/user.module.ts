import { Module } from '@nestjs/common';
import { AuthManagerModule } from 'wellfound/auth-manager';
import { ManagerModule } from 'wellfound/manager/manager.module';

import { UserController } from './user.controller';

@Module({
  imports: [ManagerModule, AuthManagerModule],
  controllers: [UserController],
})
export class UserModule {}
