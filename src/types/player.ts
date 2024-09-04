export type Player = {
  rank: string;
  name: string;
  team: string;
};

export type RankingsCapture = {
  timestamp: Date;
  players: Player[];
};

export type YahooResponse = {
  players: [
    {
      [key: string]: string;
    },
  ];
};
