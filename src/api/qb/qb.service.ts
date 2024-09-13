import { Injectable } from '@nestjs/common';
import * as EspnQbs from '../../../export/espn/qb.json';
import * as HarrisQbs from '../../../export/harris/qb.json';
import * as YahooQbs from '../../../export/yahoo/qb.json';
import { Player, UnifiedPlayers } from 'src/types/player';
import { transformNormalizeName } from 'src/common/utils';

@Injectable()
export class QbService {
  espnQbs: Player[];
  harrisQbs: Player[];
  yahooQbs: Player[];
  unifiedQbs: UnifiedPlayers;

  constructor() {
    this.espnQbs = EspnQbs.players;
    this.harrisQbs = HarrisQbs.players;
    this.yahooQbs = YahooQbs.players;
    this.unifiedQbs = {};

    this.espnQbs.concat(this.harrisQbs, this.yahooQbs).forEach((player) => {
      const name = transformNormalizeName(player.name);
      if (this.unifiedQbs.hasOwnProperty(name)) {
        this.unifiedQbs[name].ranks.push(player.rank);
        this.unifiedQbs[name].average =
          this.unifiedQbs[name].ranks.reduce((a, b) => a + b) /
          this.unifiedQbs[name].ranks.length;
        this.unifiedQbs[name].maximum = Math.max(
          ...this.unifiedQbs[name].ranks,
        );
        this.unifiedQbs[name].minimum = Math.min(
          ...this.unifiedQbs[name].ranks,
        );
      } else {
        this.unifiedQbs[name] = {
          team: player.team,
          ranks: [player.rank],
          average: player.rank,
          maximum: player.rank,
          minimum: player.rank,
        };
      }
    });

    console.log(this.unifiedQbs);
  }

  findAll() {
    return this.unifiedQbs;
  }

  findAllHarris() {
    return this.harrisQbs;
  }

  findByNameHarris(name: string) {
    return this.harrisQbs.find((player) => {
      return player.name.replace(' ', '-').toLowerCase() === name;
    });
  }
}
