import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  MongooseHealthIndicator,
} from '@nestjs/terminus';

@ApiTags('wellFound health-check')
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private mongo: MongooseHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  httpcheck() {
    return this.health.check([
      () =>
        this.http.pingCheck(
          `wellFound Head Quater - ${new Date()
            .toString()
            .replace(/T/, ':')
            .replace(/\.\w*/, '')}`,
          `${'localhost:3001'}`,
        ),
    ]);
  }
}
