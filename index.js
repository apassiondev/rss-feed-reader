async function main() {
  const URL = "https://www.bonappetit.com/feed/recipes-rss-feed/rss";

  try {
    const response = await fetch(URL);
    console.log(await response.text());
  } catch (error) {
    throw new Error(error);
  }
}

main();
