export type Source = {
  name: string;
  method: "HTTP" | "GET";
  urls: {
    qb: string;
    rb?: string;
    wr?: string;
    te?: string;
    def?: string;
  };
  selectors: {
    tableSelector?: string;
    rankSelector: string;
    nameSelector: string;
    teamSelector: string;
  };
};

export type Sources = Source[];
