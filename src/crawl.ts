import fs from 'fs';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { RankingsCapture, YahooResponse } from './types/player';
import { Source, Sources } from './types/source';
import { FootballSources } from './sources/football';
import { BasketballSources } from './sources/basketball';
import { getNestedProperty } from './common/utils';

const MAX_PLAYERS = 80;

async function fetchRanksConcurrently(sources: Sources) {
  sources.forEach(async (source) => {
    const { urls, method, name, league } = source;
    const http = method === 'HTTP';
    const positions = Object.keys(urls);
    const sourceUrls = Object.values(urls);
    const {
      tableSelector,
      fieldDetails: {
        rank: { selector: rankSelector, regex: rankRegex },
        name: { selector: nameSelector },
        team: { selector: teamSelector, regex: teamRegex, mapping },
      },
    }: Source = source;

    const responses = await Promise.allSettled(
      sourceUrls.map((sourceUrl) =>
        fetch(
          sourceUrl.url,
          sourceUrl.headers ? { headers: sourceUrl.headers } : {},
        ).then((res) => (http ? res.text() : res.json())),
      ),
    );

    responses.forEach((response, index) => {
      if (response.status === 'fulfilled') {
        const collection: RankingsCapture = {
          source: name,
          timestamp: new Date(),
          players: [],
        };
        // TODO: handle if there are no results
        if (http) {
          const body = cheerio.load(response.value as string);
          const table = body(tableSelector);

          table.each((index, element) => {
            const rank = body(element).find(rankSelector).text();
            const name = body(element).find(nameSelector).text();
            const team = body(element).find(teamSelector).text();
            if (!!rank && index - 1 < MAX_PLAYERS) {
              collection.players.push({
                rank: rankRegex
                  ? Number(rank.match(rankRegex)![1])
                  : Number(rank),
                name,
                team: teamRegex
                  ? team.match(teamRegex)![1].toUpperCase().trim()
                  : team,
              });
            }
          });
        } else {
          // GET
          const { players } = response.value as YahooResponse;

          players.forEach((player, index) => {
            // console.log(player);
            if (index < MAX_PLAYERS) {
              collection.players.push({
                rank: rankSelector
                  ? Number(getNestedProperty(player, rankSelector))
                  : index + 1,
                name: getNestedProperty(player, nameSelector),
                team: mapping
                  ? mapping[getNestedProperty(player, teamSelector) - 1]
                  : getNestedProperty(player, teamSelector),
              });
            }
          });
        }

        console.log(collection);

        saveJson(league, collection, source.name, positions[index]);

        // console.log(`Content of ${sourceUrls[index]}:`, response.value);
      } else {
        console.error(`Error fetching ${sourceUrls[index]}:`, response.reason);
      }
    });
  });
}

function saveJson(
  league: string,
  collection: RankingsCapture,
  sourceName: string,
  position: string,
) {
  const json = JSON.stringify(collection, null, 4);

  const folder = `export/${league}/${sourceName}/`.toLowerCase();
  fs.mkdir(folder, { recursive: true }, (err) => {
    if (err) throw err;
  });
  fs.writeFile(`${folder}${position}.json`, json, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

fetchRanksConcurrently(FootballSources.concat(BasketballSources));
// fetchRanksConcurrently(BasketballSources);
