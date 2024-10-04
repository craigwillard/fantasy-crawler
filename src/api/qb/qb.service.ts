import { Injectable } from '@nestjs/common';
import * as EspnQbs from '../../../export/nfl/espn/qb.json';
import * as HarrisQbs from '../../../export/nfl/harris/qb.json';
import * as YahooQbs from '../../../export/nfl/yahoo/qb.json';
import { Player, UnifiedPlayer, UnifiedPlayers } from 'src/types/player';
import { transformNormalizeName } from 'src/common/utils';

@Injectable()
export class QbService {
  espnQbs: Player[];
  harrisQbs: Player[];
  yahooQbs: Player[];
  unifiedQbs: UnifiedPlayers;

  constructor() {
    this.espnQbs = EspnQbs.players.map((player) => {
      return { ...player, source: EspnQbs.source };
    });
    this.harrisQbs = HarrisQbs.players.map((player) => {
      return { ...player, source: HarrisQbs.source };
    });
    this.yahooQbs = YahooQbs.players.map((player) => {
      return { ...player, source: YahooQbs.source };
    });
    this.unifiedQbs = {};

    this.espnQbs.concat(this.harrisQbs, this.yahooQbs).forEach((player) => {
      const { name, team, rank, source } = player;
      const playerName = transformNormalizeName(name);
      if (this.unifiedQbs.hasOwnProperty(playerName)) {
        const playa = this.unifiedQbs[playerName];
        playa.ranks.push({ source, rank });
        playa.average =
          playa.ranks.reduce((a, b) => a + b.rank, 0) / playa.ranks.length;
        playa.maximum = Math.max(...playa.ranks.map((rank) => rank.rank));
        playa.minimum = Math.min(...playa.ranks.map((rank) => rank.rank));
      } else {
        this.unifiedQbs[playerName] = {
          name,
          team,
          ranks: [{ source, rank }],
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
