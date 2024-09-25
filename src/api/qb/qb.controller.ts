import { Controller, Get, Param } from '@nestjs/common';
import { QbService } from './qb.service';

@Controller('qb')
export class QbController {
  constructor(private qbService: QbService) {}

  @Get()
  findAll() {
    return this.qbService.findAll();
  }

  @Get('harris')
  findAllHarris() {
    return this.qbService.findAllHarris();
  }

  @Get('harris/:name')
  find(@Param('name') name: string) {
    return this.qbService.findByNameHarris(name);
  }
}
