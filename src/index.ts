import fs from "fs";
import fetch from "node-fetch";
import * as cheerio from "cheerio";
import { Players, YahooResponse } from "./types/player";
import { Sources } from "./types/source";
import { AllSources } from "./sources/sources";

const MAX_PLAYERS = 80;

async function fetchRanksConcurrently(sources: Sources) {
  sources.forEach(async (source) => {
    const { urls, method } = source;
    const http = method === "HTTP";
    const positions = Object.keys(urls);
    const sourceUrls = Object.values(urls);
    const {
      selectors: { tableSelector, rankSelector, nameSelector, teamSelector },
    } = source;

    const responses = await Promise.allSettled(
      sourceUrls.map((sourceUrl) =>
        fetch(sourceUrl).then((res) => (http ? res.text() : res.json()))
      )
    );

    responses.forEach((response, index) => {
      if (response.status === "fulfilled") {
        let collection: Players = [];
        if (http) {
          const body = cheerio.load(response.value as string);
          const table = body(tableSelector);

          table.each((index, element) => {
            const rank = body(element).find(rankSelector).text();
            const name = body(element).find(nameSelector).text();
            const team = body(element).find(teamSelector).text();
            if (!!rank && index - 1 < MAX_PLAYERS) {
              collection.push({
                rank,
                name,
                team,
              });
            }
          });
        } else {
          const { players } = response.value as YahooResponse;

          players.forEach((player, index) => {
            if (index < MAX_PLAYERS) {
              collection.push({
                rank: player[rankSelector],
                name: player[nameSelector],
                team: player[teamSelector],
              });
            }
          });
        }

        console.log(collection);

        saveJson(collection, source.name, positions[index]);

        // console.log(`Content of ${sourceUrls[index]}:`, response.value);
      } else {
        console.error(`Error fetching ${sourceUrls[index]}:`, response.reason);
      }
    });
  });
}

function saveJson(collection: Players, sourceName: string, position: string) {
  const json = JSON.stringify(collection, null, 4);

  const folder = `export/${sourceName}/`.toLowerCase();
  fs.mkdir(folder, { recursive: true }, (err) => {
    if (err) throw err;
  });
  fs.writeFile(`${folder}${position}.json`, json, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

fetchRanksConcurrently(AllSources);
