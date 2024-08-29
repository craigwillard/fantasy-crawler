import { Source, Sources } from "../types/source";

export const Harris: Source = {
  name: "Harris",
  method: "HTTP",
  urls: {
    qb: "https://www.harrisfootball.com/ranks-draft",
    rb: "https://www.harrisfootball.com/rb-ranks-draft",
    wr: "https://www.harrisfootball.com/wr-ranks-draft",
    te: "https://www.harrisfootball.com/te-ranks-draft",
    def: "https://www.harrisfootball.com/def-ranks-draft",
  },
  selectors: {
    tableSelector: ".sqs-layout table:first-child tr",
    rankSelector: "td:nth-of-type(1)",
    nameSelector: "td:nth-of-type(2)",
    teamSelector: "td:nth-of-type(3)",
  },
};

export const Yahoo: Source = {
  name: "Yahoo",
  method: "GET",
  urls: {
    qb: "https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=QB&sport=NFL&year=2024&week=0&experts=show&id=1663&type=ST&scoring=HALF&filters=7%3A9%3A285%3A747%3A4338&widget=ST",
    rb: "https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=RB&sport=NFL&year=2024&week=0&experts=show&id=1663&type=ST&scoring=HALF&filters=7%3A9%3A285%3A747%3A4338&widget=ST",
    wr: "https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=WR&sport=NFL&year=2024&week=0&experts=show&id=1663&type=ST&scoring=HALF&filters=7%3A9%3A285%3A747%3A4338&widget=ST",
    te: "https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=TE&sport=NFL&year=2024&week=0&experts=show&id=1663&type=ST&scoring=HALF&filters=7%3A9%3A285%3A747%3A4338&widget=ST",
    def: "https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=DST&sport=NFL&year=2024&week=0&experts=show&id=1663&type=ST&scoring=HALF&filters=7%3A9%3A285%3A747%3A4338&widget=ST",
  },
  selectors: {
    rankSelector: "rank_ecr",
    nameSelector: "player_name",
    teamSelector: "player_team_id",
  },
};

export const AllSources: Sources = [Harris, Yahoo];
