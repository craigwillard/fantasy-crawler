export type Field = 'rank' | 'name' | 'team';

export type FieldDetails = {
  selector: string;
  regex?: RegExp;
};

export type Source = {
  name: string;
  method: 'HTTP' | 'GET';
  urls: {
    qb: string;
    rb: string;
    wr: string;
    te: string;
    def: string;
  };
  tableSelector?: string;
  fieldDetails: {
    [key in Field]: FieldDetails;
  };
};

export type Sources = Source[];
