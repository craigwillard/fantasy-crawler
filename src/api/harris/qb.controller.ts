import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from './qb.service';

@Controller('harris/qb')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':name')
  find(@Param('name') name: string) {
    return this.catsService.findByName(name);
  }
}
