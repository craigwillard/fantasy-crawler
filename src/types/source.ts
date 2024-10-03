export type Field = 'rank' | 'name' | 'team';
export type FootballPosition = 'qb' | 'rb' | 'wr' | 'te' | 'def';
export type BasketballPosition = 'pg' | 'sg' | 'sf' | 'pf' | 'c';

export type FieldDetails = {
  selector: string;
  regex?: RegExp;
};

export type Source = {
  name: string;
  league: string;
  method: 'HTTP' | 'GET';
  urls: {
    [key in FootballPosition | BasketballPosition]?: string;
  };
  tableSelector?: string;
  fieldDetails: {
    [key in Field]: FieldDetails;
  };
};

export type Sources = Source[];
