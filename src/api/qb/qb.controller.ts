import { Controller, Get, Param } from '@nestjs/common';
import { QbService } from './qb.service';

@Controller('qb')
export class QbController {
  constructor(private catsService: QbService) {}

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get('harris')
  findAllHarris() {
    return this.catsService.findAllHarris();
  }

  @Get('harris/:name')
  find(@Param('name') name: string) {
    return this.catsService.findByNameHarris(name);
  }
}
