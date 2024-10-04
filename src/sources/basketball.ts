import { Source, Sources } from '../types/source';

export const Yahoo: Source = {
  name: 'Yahoo',
  league: 'NBA',
  method: 'GET',
  urls: {
    pg: 'https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=PG&sport=NBA&year=2024&week=0',
    sg: 'https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=SG&sport=NBA&year=2024&week=0',
    sf: 'https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=SF&sport=NBA&year=2024&week=0',
    pf: 'https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=PF&sport=NBA&year=2024&week=0',
    c: 'https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=C&sport=NBA&year=2024&week=0',
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
  league: 'NBA',
  method: 'HTTP',
  urls: {
    qb: 'https://fantasy.espn.com/football/tools/fantasyRankings?slotCategoryId=0&scoringPeriodId=0&seasonId=2024&count=80',
    rb: 'https://fantasy.espn.com/football/tools/fantasyRankings?slotCategoryId=2&scoringPeriodId=0&seasonId=2024&count=80',
    wr: 'https://fantasy.espn.com/football/tools/fantasyRankings?slotCategoryId=4&scoringPeriodId=0&seasonId=2024&count=80',
    te: 'https://fantasy.espn.com/football/tools/fantasyRankings?slotCategoryId=6&scoringPeriodId=0&seasonId=2024&count=80',
    def: 'https://fantasy.espn.com/football/tools/fantasyRankings?slotCategoryId=16&scoringPeriodId=0&seasonId=2024&count=80',
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

export const BasketballSources: Sources = [Yahoo];
