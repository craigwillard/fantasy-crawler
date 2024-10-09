import { Source, Sources } from '../types/source';

export const Yahoo: Source = {
  name: 'Yahoo',
  league: 'NBA',
  method: 'GET',
  urls: {
    pg: {
      url: 'https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=PG&sport=NBA&year=2024&week=0',
    },
    sg: {
      url: 'https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=SG&sport=NBA&year=2024&week=0',
    },
    sf: {
      url: 'https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=SF&sport=NBA&year=2024&week=0',
    },
    pf: {
      url: 'https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=PF&sport=NBA&year=2024&week=0',
    },
    c: {
      url: 'https://partners.fantasypros.com/api/v1/consensus-rankings.php?position=C&sport=NBA&year=2024&week=0',
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
  league: 'NBA',
  method: 'GET',
  urls: {
    pg: {
      url: 'https://lm-api-reads.fantasy.espn.com/apis/v3/games/fba/seasons/2025/segments/0/leaguedefaults/1?scoringPeriodId=0&view=kona_player_info',
      headers: {
        'x-fantasy-filter':
          '{"players":{"filterSlotIds":{"value":[0]},"filterStatsForExternalIds":{"value":[2024,2025]},"filterStatsForSourceIds":{"value":[0,1]},"sortAppliedStatTotal":{"sortAsc":false,"sortPriority":3,"value":"102025"},"sortDraftRanks":{"sortPriority":2,"sortAsc":true,"value":"ROTO"},"sortPercOwned":{"sortAsc":false,"sortPriority":4},"limit":50,"offset":0,"filterRanksForScoringPeriodIds":{"value":[1]},"filterRanksForRankTypes":{"value":["STANDARD"]},"filterStatsForTopScoringPeriodIds":{"value":5,"additionalValue":["002025","102025","002024","012025","022025","032025","042025"]}}}',
      },
    },
    sg: {
      url: 'https://lm-api-reads.fantasy.espn.com/apis/v3/games/fba/seasons/2025/segments/0/leaguedefaults/1?scoringPeriodId=0&view=kona_player_info',
      headers: {
        'x-fantasy-filter':
          '{"players":{"filterSlotIds":{"value":[1]},"filterStatsForExternalIds":{"value":[2024,2025]},"filterStatsForSourceIds":{"value":[0,1]},"sortAppliedStatTotal":{"sortAsc":false,"sortPriority":3,"value":"102025"},"sortDraftRanks":{"sortPriority":2,"sortAsc":true,"value":"ROTO"},"sortPercOwned":{"sortAsc":false,"sortPriority":4},"limit":50,"offset":0,"filterRanksForScoringPeriodIds":{"value":[1]},"filterRanksForRankTypes":{"value":["STANDARD"]},"filterStatsForTopScoringPeriodIds":{"value":5,"additionalValue":["002025","102025","002024","012025","022025","032025","042025"]}}}',
      },
    },
    sf: {
      url: 'https://lm-api-reads.fantasy.espn.com/apis/v3/games/fba/seasons/2025/segments/0/leaguedefaults/1?scoringPeriodId=0&view=kona_player_info',
      headers: {
        'x-fantasy-filter':
          '{"players":{"filterSlotIds":{"value":[2]},"filterStatsForExternalIds":{"value":[2024,2025]},"filterStatsForSourceIds":{"value":[0,1]},"sortAppliedStatTotal":{"sortAsc":false,"sortPriority":3,"value":"102025"},"sortDraftRanks":{"sortPriority":2,"sortAsc":true,"value":"ROTO"},"sortPercOwned":{"sortAsc":false,"sortPriority":4},"limit":50,"offset":0,"filterRanksForScoringPeriodIds":{"value":[1]},"filterRanksForRankTypes":{"value":["STANDARD"]},"filterStatsForTopScoringPeriodIds":{"value":5,"additionalValue":["002025","102025","002024","012025","022025","032025","042025"]}}}',
      },
    },
    pf: {
      url: 'https://lm-api-reads.fantasy.espn.com/apis/v3/games/fba/seasons/2025/segments/0/leaguedefaults/1?scoringPeriodId=0&view=kona_player_info',
      headers: {
        'x-fantasy-filter':
          '{"players":{"filterSlotIds":{"value":[3]},"filterStatsForExternalIds":{"value":[2024,2025]},"filterStatsForSourceIds":{"value":[0,1]},"sortAppliedStatTotal":{"sortAsc":false,"sortPriority":3,"value":"102025"},"sortDraftRanks":{"sortPriority":2,"sortAsc":true,"value":"ROTO"},"sortPercOwned":{"sortAsc":false,"sortPriority":4},"limit":50,"offset":0,"filterRanksForScoringPeriodIds":{"value":[1]},"filterRanksForRankTypes":{"value":["STANDARD"]},"filterStatsForTopScoringPeriodIds":{"value":5,"additionalValue":["002025","102025","002024","012025","022025","032025","042025"]}}}',
      },
    },
    c: {
      url: 'https://lm-api-reads.fantasy.espn.com/apis/v3/games/fba/seasons/2025/segments/0/leaguedefaults/1?scoringPeriodId=0&view=kona_player_info',
      headers: {
        'x-fantasy-filter':
          '{"players":{"filterSlotIds":{"value":[4]},"filterStatsForExternalIds":{"value":[2024,2025]},"filterStatsForSourceIds":{"value":[0,1]},"sortAppliedStatTotal":{"sortAsc":false,"sortPriority":3,"value":"102025"},"sortDraftRanks":{"sortPriority":2,"sortAsc":true,"value":"ROTO"},"sortPercOwned":{"sortAsc":false,"sortPriority":4},"limit":50,"offset":0,"filterRanksForScoringPeriodIds":{"value":[1]},"filterRanksForRankTypes":{"value":["STANDARD"]},"filterStatsForTopScoringPeriodIds":{"value":5,"additionalValue":["002025","102025","002024","012025","022025","032025","042025"]}}}',
      },
    },
  },
  tableSelector: '#rankings-table-content tbody tr',
  fieldDetails: {
    rank: {
      selector: '',
    },
    name: {
      selector: 'player.fullName',
    },
    team: {
      selector: 'player.proTeamId',
      mapping: [
        'ATL',
        'BOS',
        'NOR',
        'CHI',
        'CLE',
        'DAL',
        'DEN',
        'DET',
        'GSW',
        'HOU',
        'IND',
        'LAC',
        'LAL',
        'MIA',
        'MIL',
        'MIN',
        'BKN',
        'NYK',
        'ORL',
        'PHI',
        'PHO',
        'POR',
        'SAC',
        'SAS',
        'OKC',
        'UTH',
        'WAS',
        'TOR',
        'MEM',
        'CHA',
      ],
    },
  },
};

export const BasketballSources: Sources = [ESPN];
