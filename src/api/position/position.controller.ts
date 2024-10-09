import { Controller, Get, Param } from '@nestjs/common';
import { PositionService } from './position.service';

@Controller('qb')
export class PositionController {
  constructor(private qbService: PositionService) {}

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
