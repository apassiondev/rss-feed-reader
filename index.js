import Parser from "rss-parser";

async function main() {
  const parser = new Parser();

  const URL = "https://www.bonappetit.com/feed/recipes-rss-feed/rss";

  try {
    const { title, items } = await parser.parseURL(URL);
    console.log(title);

    const results = items.map(({ title, link }) => ({ title, link }));
    console.table(results);
  } catch (error) {
    throw new Error(error);
  }
}

main();
