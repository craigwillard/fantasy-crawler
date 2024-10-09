import { Source, Sources } from '../types/source';

export const Harris: Source = {
  name: 'Harris',
  league: 'NFL',
  method: 'HTTP',
  urls: {
    qb: { url: 'https://www.harrisfootball.com/ranks-draft' },
    rb: { url: 'https://www.harrisfootball.com/rb-ranks-draft' },
    wr: { url: 'https://www.harrisfootball.com/wr-ranks-draft' },
    te: { url: 'https://www.harrisfootball.com/te-ranks-draft' },
    def: { url: 'https://www.harrisfootball.com/def-ranks-draft' },
  },
  tableSelector: '.sqs-layout table:first-child tr',
  fieldDetails: {
    rank: {
      selector: 'td:nth-of-type(1)',
    },
    name: {
      selector: 'td:nth-of-type(2)',
    },
    team: {
      selector: 'td:nth-of-type(3)',
    },
  },
};

export const Yahoo: Source = {
  name: 'Yahoo',
  league: 'NFL',
  method: 'GET',
  urls: {
    qb: {
      url: 'https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=QB&sport=NFL&year=2024&week=0&experts=show&id=1663&type=ST&scoring=HALF&filters=7%3A9%3A285%3A747%3A4338&widget=ST',
    },
    rb: {
      url: 'https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=RB&sport=NFL&year=2024&week=0&experts=show&id=1663&type=ST&scoring=HALF&filters=7%3A9%3A285%3A747%3A4338&widget=ST',
    },
    wr: {
      url: 'https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=WR&sport=NFL&year=2024&week=0&experts=show&id=1663&type=ST&scoring=HALF&filters=7%3A9%3A285%3A747%3A4338&widget=ST',
    },
    te: {
      url: 'https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=TE&sport=NFL&year=2024&week=0&experts=show&id=1663&type=ST&scoring=HALF&filters=7%3A9%3A285%3A747%3A4338&widget=ST',
    },
    def: {
      url: 'https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=DST&sport=NFL&year=2024&week=0&experts=show&id=1663&type=ST&scoring=HALF&filters=7%3A9%3A285%3A747%3A4338&widget=ST',
    },
  },
  fieldDetails: {
    rank: {
      selector: 'rank_ecr',
    },
    name: {
      selector: 'player_name',
    },
    team: {
      selector: 'player_team_id',
    },
  },
};

export const ESPN: Source = {
  name: 'ESPN',
  league: 'NFL',
  method: 'HTTP',
  urls: {
    qb: {
      url: 'https://fantasy.espn.com/football/tools/fantasyRankings?slotCategoryId=0&scoringPeriodId=0&seasonId=2024&count=80',
    },
    rb: {
      url: 'https://fantasy.espn.com/football/tools/fantasyRankings?slotCategoryId=2&scoringPeriodId=0&seasonId=2024&count=80',
    },
    wr: {
      url: 'https://fantasy.espn.com/football/tools/fantasyRankings?slotCategoryId=4&scoringPeriodId=0&seasonId=2024&count=80',
    },
    te: {
      url: 'https://fantasy.espn.com/football/tools/fantasyRankings?slotCategoryId=6&scoringPeriodId=0&seasonId=2024&count=80',
    },
    def: {
      url: 'https://fantasy.espn.com/football/tools/fantasyRankings?slotCategoryId=16&scoringPeriodId=0&seasonId=2024&count=80',
    },
  },
  tableSelector: '#rankings-table-content tbody tr',
  fieldDetails: {
    rank: {
      selector: '.rank',
      regex: /^(.*?)\./,
    },
    name: {
      selector: '.rank a',
    },
    team: {
      selector: '.rank',
      regex: /,([^,]*)$/,
    },
  },
};

export const FootballSources: Sources = [Yahoo, ESPN];
