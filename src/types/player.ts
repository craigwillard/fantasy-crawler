export type Player = {
  rank: string;
  name: string;
  team: string;
};

export type Players = Player[];

export type YahooResponse = {
  players: [
    {
      [key: string]: string;
    },
  ];
};
