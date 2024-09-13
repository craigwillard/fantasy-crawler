import { Injectable } from '@nestjs/common';
import * as EspnQbs from '../../../export/espn/qb.json';
import * as HarrisQbs from '../../../export/harris/qb.json';
import * as YahooQbs from '../../../export/yahoo/qb.json';
import { Player } from 'src/types/player';

@Injectable()
export class QbService {
  espnQbs: Player[];
  harrisQbs: Player[];
  yahooQbs: Player[];
  constructor() {
    this.espnQbs = EspnQbs.players;
    this.harrisQbs = HarrisQbs.players;
    this.yahooQbs = YahooQbs.players;
  }

  findAll() {
    return this.harrisQbs;
  }

  findByName(name: string) {
    return this.harrisQbs.find((player) => {
      return player.name.replace(' ', '-').toLowerCase() === name;
    });
  }
}
