import Parser from "rss-parser";
import chalk from "chalk";

async function main() {
  const parser = new Parser({
    headers: {}, // In several cases, we need to add a valid user-agent
  });

  // Define a list of URLs to read from
  const urls = [
    "https://www.bonappetit.com/feed/recipes-rss-feed/rss",
    "https://www.spendwithpennies.com/feed/",
    "https://damndelicious.net/feed/",
  ];

  const feedItems = [];
  try {
    console.log(chalk.cyan("Loading your recipes..."));
    const searchTerm = "Chicken";
    const awaitableRequests = urls.map((url) => parser.parseURL(url));
    // const awaitableRequests = urls.map((url) => fetch(url));
    const responses = await Promise.all(awaitableRequests);
    // console.log(responses);
    aggregate(responses, feedItems, searchTerm);
    print(feedItems);
  } catch (error) {
    throw new Error(error);
  }
}

// pass RSS responses and feedItems array to the aggregate function
const aggregate = (responses, feedItems, searchKey = "") => {
  // loop through each feed response and access it's `items` array
  for (let { items } of responses) {
    // loop through each item, extracting only `title` & `link`
    for (let { title, link } of items) {
      // Add the item to `feedItems` only if the title contains the substring `veg`
      if (searchKey) {
        if (title.toLowerCase().includes(searchKey.toLowerCase()))
          feedItems.push({ title, link });
      } else {
        feedItems.push({ title, link });
      }
    }
  }

  // return the filtered feedItems
  return feedItems;
};

const print = (feedItems) => {
  // clear previous logs from the console
  console.clear();
  // print the filtered items as a table
  console.table(feedItems);
  // display the time of the last update in UTC format
  console.log("Last updated:", new Date().toUTCString());
};

main();
// setInterval(main, 60000);
