import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QbController } from './api/qb/qb.controller';
import { QbService } from './api/qb/qb.service';

@Module({
  imports: [],
  controllers: [AppController, QbController],
  providers: [AppService, QbService],
})
export class AppModule {}
