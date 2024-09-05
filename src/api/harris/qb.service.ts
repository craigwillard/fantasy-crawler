import { Injectable } from '@nestjs/common';
import * as HarrisQBs from '../../../export/harris/qb.json';
import { Player } from 'src/types/player';

@Injectable()
export class CatsService {
  players: Player[];
  constructor() {
    this.players = HarrisQBs.players;
  }

  findAll() {
    return this.players;
  }

  findByName(name: string) {
    return this.players.find((player) => {
      return player.name.replace(' ', '-').toLowerCase() === name;
    });
  }
}
