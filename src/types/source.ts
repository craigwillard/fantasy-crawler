export type Field = 'rank' | 'name' | 'team';

export const leagues = ['nfl', 'nba'] as const;
export type League = (typeof leagues)[number];

export const footballPositions = ['qb', 'rb', 'wr', 'te', 'def'] as const;
export type FootballPosition = (typeof footballPositions)[number];

export const basketballPositions = ['pg', 'sg', 'sf', 'pf', 'c'] as const;
export type BasketballPosition = (typeof basketballPositions)[number];

export type FieldDetails = {
  selector: string;
  regex?: RegExp;
  mapping?: string[];
};

export type UrlDetails = {
  url: string;
  headers?: {
    [key: string]: string;
  };
};

export type Source = {
  name: string;
  league: League;
  method: 'HTTP' | 'GET';
  urls: {
    [key in BasketballPosition | FootballPosition]?: UrlDetails;
  };
  tableSelector?: string;
  fieldDetails: {
    [key in Field]: FieldDetails;
  };
};

export type Sources = Source[];
