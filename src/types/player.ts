export type Player = {
  rank: number;
  name: string;
  team: string;
  source?: string;
};

export type RankingsCapture = {
  timestamp: Date;
  players: Player[];
  source: string;
};

export type YahooPlayer = {
  [key: string]: string;
};

export type YahooResponse = {
  players: YahooPlayer[];
};

export type Ranking = {
  rank: number;
  source: string;
};

export type UnifiedPlayer = {
  id: string;
  name: string;
  team: string;
  rank: number;
  ranks: Ranking[];
  average: number;
  maximum: number;
  minimum: number;
};

export type UnifiedPlayers = {
  [key: string]: UnifiedPlayer;
};
