/* eslint-disable @typescript-eslint/no-unused-vars */
import * as fs from 'fs';
import * as path from 'path';
import { Injectable } from '@nestjs/common';

import * as EspnQbs from '../../../export/nfl/espn/qb.json';
import * as HarrisQbs from '../../../export/nfl/harris/qb.json';
import * as YahooQbs from '../../../export/nfl/yahoo/qb.json';
import {
  Player,
  RankingsCapture,
  UnifiedPlayer,
  UnifiedPlayers,
} from 'src/types/player';
import { transformNormalizeName } from 'src/common/utils';
import { BasketballPosition, FootballPosition, League } from 'src/types/source';

@Injectable()
export class PositionService {
  espnQbs: Player[];
  harrisQbs: Player[];
  yahooQbs: Player[];
  unifiedQbs: UnifiedPlayers;
  outputQbs: UnifiedPlayer[];

  constructor() {
    const footballSubfolders = this.getSubfolders('export/nfl');
    const basketballSubfolders = this.getSubfolders('export/nba');
    console.log(footballSubfolders);
    console.log(basketballSubfolders);
    footballSubfolders.forEach((subfolder) => {});
    // try {
    //   const filePath = 'export/nfl/espn/qb.json';

    //   if (fs.existsSync(filePath)) {
    //     const data: RankingsCapture = JSON.parse(
    //       fs.readFileSync(filePath).toString(),
    //     );
    //     console.log('File exists and data imported:', data);
    //   } else {
    //     console.log('File does not exist.');
    //   }
    // } catch (err) {
    //   console.error('Error reading file:', err);
    // }

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
          id: crypto.randomUUID(),
          name,
          team,
          ranks: [{ source, rank }],
          rank,
          average: rank,
          maximum: rank,
          minimum: rank,
          drafted: false,
        };
      }
    });
    const arrUnifiedQbs: UnifiedPlayer[] = [];
    Object.entries(this.unifiedQbs).forEach((player) => {
      const [, playerDetails] = player;
      arrUnifiedQbs.push(playerDetails);
    });

    this.outputQbs = arrUnifiedQbs
      .sort((a, b) => a.average - b.average)
      .map((player, index) => {
        return {
          ...player,
          rank: index + 1,
        };
      });
  }

  // gatherPosition(league: string, position: string) {

  // }

  getSubfolders(dir) {
    const subfolders = [];

    fs.readdirSync(dir).forEach((file) => {
      const fullPath = path.join(dir, file);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        subfolders.push(fullPath);
        subfolders.push(...this.getSubfolders(fullPath)); // Recursive call for nested subfolders
      }
    });

    return subfolders;
  }

  findAll(league: League, position: BasketballPosition | FootballPosition) {
    console.log(`This action returns all ${position}s in the ${league}.`);
    return this.outputQbs;
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
