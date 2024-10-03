import { Injectable } from '@nestjs/common';
import * as EspnQbs from '../../../export/espn/qb.json';
import * as HarrisQbs from '../../../export/harris/qb.json';
import * as YahooQbs from '../../../export/yahoo/qb.json';
import { Player, UnifiedPlayer, UnifiedPlayers } from 'src/types/player';
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
      const { name, team, rank } = player;
      const playerName = transformNormalizeName(name);
      if (this.unifiedQbs.hasOwnProperty(playerName)) {
        const playa = this.unifiedQbs[playerName];
        playa.ranks.push(rank);
        playa.average =
          playa.ranks.reduce((a, b) => a + b) / playa.ranks.length;
        playa.maximum = Math.max(...playa.ranks);
        playa.minimum = Math.min(...playa.ranks);
      } else {
        this.unifiedQbs[playerName] = {
          name,
          team,
          ranks: [rank],
          rank,
          average: rank,
          maximum: rank,
          minimum: rank,
          id: crypto.randomUUID(),
        };
      }
    });

    // console.log(this.unifiedQbs);
  }

  findAll() {
    // console.log(Object.entries(this.unifiedQbs));
    const arrUnifiedQbs: UnifiedPlayer[] = [];
    Object.entries(this.unifiedQbs).forEach((player) => {
      const [, playerDetails] = player;
      arrUnifiedQbs.push(playerDetails);
    });
    // return this.unifiedQbs;
    return arrUnifiedQbs
      .sort((a, b) => a.average - b.average)
      .map((player, index) => {
        return {
          ...player,
          rank: index + 1,
        };
      });
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
