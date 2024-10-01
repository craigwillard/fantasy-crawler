import { Source, Sources } from '../types/source';

export const Yahoo: Source = {
  name: 'Yahoo',
  method: 'GET',
  urls: {
    pg: 'https://pub-api-ro.fantasysports.yahoo.com/fantasy/v2/league/454.l.public;out=settings/players;position=PG;start=0;count=30;sort=rank_season;search=;out=auction_values,ranks;ranks=season;ranks_by_position=season;out=expert_ranks;expert_ranks.rank_type=projected_season_remaining/draft_analysis;cut_types=diamond;slices=last7days?format=json_f',
    sg: 'https://pub-api-ro.fantasysports.yahoo.com/fantasy/v2/league/454.l.public;out=settings/players;position=SG;start=0;count=30;sort=rank_season;search=;out=auction_values,ranks;ranks=season;ranks_by_position=season;out=expert_ranks;expert_ranks.rank_type=projected_season_remaining/draft_analysis;cut_types=diamond;slices=last7days?format=json_f',
    sf: 'https://pub-api-ro.fantasysports.yahoo.com/fantasy/v2/league/454.l.public;out=settings/players;position=SF;start=0;count=30;sort=rank_season;search=;out=auction_values,ranks;ranks=season;ranks_by_position=season;out=expert_ranks;expert_ranks.rank_type=projected_season_remaining/draft_analysis;cut_types=diamond;slices=last7days?format=json_f',
    pf: 'https://pub-api-ro.fantasysports.yahoo.com/fantasy/v2/league/454.l.public;out=settings/players;position=PF;start=0;count=30;sort=rank_season;search=;out=auction_values,ranks;ranks=season;ranks_by_position=season;out=expert_ranks;expert_ranks.rank_type=projected_season_remaining/draft_analysis;cut_types=diamond;slices=last7days?format=json_f',
    c: 'https://pub-api-ro.fantasysports.yahoo.com/fantasy/v2/league/454.l.public;out=settings/players;position=C;start=0;count=30;sort=rank_season;search=;out=auction_values,ranks;ranks=season;ranks_by_position=season;out=expert_ranks;expert_ranks.rank_type=projected_season_remaining/draft_analysis;cut_types=diamond;slices=last7days?format=json_f',
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

export const AllSources: Sources = [Yahoo];
