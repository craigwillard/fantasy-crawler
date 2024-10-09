import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PositionController } from './api/position/position.controller';
import { PositionService } from './api/position/position.service';

@Module({
  imports: [],
  controllers: [AppController, PositionController],
  providers: [AppService, PositionService],
})
export class AppModule {}
