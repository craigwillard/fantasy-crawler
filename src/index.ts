import fs from "fs";
import fetch from "node-fetch";
import * as cheerio from "cheerio";
import { Players } from "./types/player";
import { HarrisFootball } from "./sources/harris";

const crawl = async () => {
  const response = await fetch(HarrisFootball.urls.qb);
  const htmlBody = await response.text();

  const parsedBody = cheerio.load(htmlBody);
  const table = parsedBody("table:nth-of-type(1) tr");
  const collection: Players = [];

  table.each((index, element) => {
    const rank = index + 1;
    const name = parsedBody(element).find("td:nth-of-type(2)").text();
    const team = parsedBody(element).find("td:nth-of-type(3)").text();
    if (!!name) {
      collection.push({
        rank,
        name,
        team,
      });
    }
    console.log(`${rank}.) ${name} - ${team}`);
  });
  console.log(collection);

  var json = JSON.stringify(collection, null, 4);
  fs.writeFile("export/harris-qb.json", json, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

crawl();
