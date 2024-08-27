import fs from "fs";
import fetch from "node-fetch";
import * as cheerio from "cheerio";
import { Players } from "./types/player";
import { HarrisFootball } from "./sources/harris";

const MAX_PLAYERS = 80;

async function fetchRanksConcurrently() {
  const positions = Object.keys(HarrisFootball.urls);
  const urls = Object.values(HarrisFootball.urls);
  const responses = await Promise.allSettled(
    urls.map((url) => fetch(url).then((res) => res.text()))
  );

  responses.forEach((response, index) => {
    if (response.status === "fulfilled") {
      const body = cheerio.load(response.value);
      const table = body(".sqs-layout table:first-child tr");
      const collection: Players = [];
      let rank = 0;

      table.each((index, element) => {
        const pageRank = body(element).find("td:nth-of-type(1)").text();
        const name = body(element).find("td:nth-of-type(2)").text();
        const team = body(element).find("td:nth-of-type(3)").text();
        if (!!pageRank && index - 1 < MAX_PLAYERS) {
          rank += 1;
          collection.push({
            rank,
            name,
            team,
          });
          console.log(`${rank}.) ${name} - ${team}`);
        }
      });

      var json = JSON.stringify(collection, null, 4);
      fs.writeFile(`export/harris-${positions[index]}.json`, json, (err) => {
        if (err) {
          console.error(err);
        }
      });
      // console.log(`Content of ${urls[index]}:`, response.value);
    } else {
      console.error(`Error fetching ${urls[index]}:`, response.reason);
    }
  });
}

fetchRanksConcurrently();
