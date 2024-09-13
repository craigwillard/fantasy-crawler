export type Player = {
  rank: number;
  name: string;
  team: string;
};

export type RankingsCapture = {
  timestamp: Date;
  players: Player[];
};

export type YahooPlayer = {
  [key: string]: string;
};

export type YahooResponse = {
  players: YahooPlayer[];
};

export type UnifiedPlayers = {
  [key: string]: {
    team: string;
    ranks: number[];
    average: number;
    maximum: number;
    minimum: number;
  };
};
