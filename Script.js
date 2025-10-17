import axios from "axios";
import * as cheerio from "cheerio";

const url = "https://en.wikipedia.org/wiki/Web_scraping";

const scrape = async () => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    console.log("Page Title:", $("title").text());

    $("p").each((_, el) => {
      console.log($(el).text());
    });

    console.log("\nAll Links:");
    $("a[href]").each((_, el) => {
      console.log($(el).attr("href"), "-", $(el).text());
    });
  } catch (err) {
    console.error(err);
  }
};

scrape();
