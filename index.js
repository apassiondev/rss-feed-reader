import Parser from "rss-parser";

async function main() {
  const parser = new Parser();

  const URL = "https://www.bonappetit.com/feed/recipes-rss-feed/rss";

  try {
    const { title, items } = await parser.parseURL(URL);
    console.log(title);

    const results = items.map(({ title, link }) => ({ title, link }));

    console.clear();
    console.table(results);
    console.log("Last updated:", new Date().toUTCString());
  } catch (error) {
    throw new Error(error);
  }
}

setInterval(main, 2000);
