import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthManagerModule } from 'wellfound/auth-manager';
import { JwtAuthGuard } from 'wellfound/auth-manager/jwt-auth.guard';
import { addIpMeta } from 'wellfound/building-block/utils/winstonLogger';
import { ManagerModule } from 'wellfound/manager';

import { AppController } from './app.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'apps/wellfound//.env',
    }),
    ManagerModule,
    UserModule,
    AuthManagerModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(addIpMeta).forRoutes('*');
  }
}
