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
