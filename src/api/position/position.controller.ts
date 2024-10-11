import { Controller, Get, Param } from '@nestjs/common';
import { PositionService } from './position.service';
import { BasketballPosition, FootballPosition, League } from 'src/types/source';

@Controller()
export class PositionController {
  constructor(private positionService: PositionService) {}

  @Get(':league/:position')
  findAll(
    @Param('league') league: League,
    @Param('position') position: BasketballPosition | FootballPosition,
  ) {
    console.log(`This action returns all ${position}s in the ${league}.`);
    return this.positionService.findAll(league, position);
  }

  @Get('harris')
  findAllHarris() {
    return this.positionService.findAllHarris();
  }

  @Get('harris/:name')
  find(@Param('name') name: string) {
    return this.positionService.findByNameHarris(name);
  }
}
