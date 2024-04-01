import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModel, UserModelSchema } from './user/user.model';

const databaseProviders = [
  MongooseModule.forFeature([
    { name: UserModel.name, schema: UserModelSchema },
  ]),
];

@Module({
  imports: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
