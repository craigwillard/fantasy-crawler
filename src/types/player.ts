export type Player = {
  rank: number;
  name: string;
  team: string;
};

export type RankingsCapture = {
  timestamp: Date;
  players: Player[];
  source?: string;
};

export type YahooFootballPlayer = {
  [key: string]: string;
};

export type YahooFootballResponse = {
  players: YahooFootballPlayer[];
};

export type YahooBasketballPlayer = {
  player: {
    name: {
      full: string;
    };
    editorial_team_abbr: string;
  };
};

export type YahooBasketballResponse = {
  fantasy_content: {
    league: {
      players: YahooBasketballPlayer[];
    };
  };
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
  ranks: number[];
  average: number;
  maximum: number;
  minimum: number;
};

export type UnifiedPlayers = {
  [key: string]: UnifiedPlayer;
};
