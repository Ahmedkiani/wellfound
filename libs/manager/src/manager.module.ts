import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { BuildingBlockModule } from 'wellfound/building-block';

import { DatabaseModule } from './database.module';
import { IUserService } from './user/user.service';
import { UserManagerService } from './user/user-manager.service';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    MongooseModule.forRoot(`${process.env.DB_URL}`),
    BuildingBlockModule,
    DatabaseModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET') || 'secret',
          signOptions: { expiresIn: '1d' },
        };
      },
    }),

    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
  providers: [
    UserManagerService,

    { provide: IUserService, useClass: UserManagerService },
  ],

  exports: [DatabaseModule, UserManagerService, IUserService],
})
export class ManagerModule {}
