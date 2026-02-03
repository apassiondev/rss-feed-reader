# Project Improvements

## TODOS

1. Add a configurable keyword filter to your aggregator

- [ ] Modify the aggregator so users can specify a keyword at runtime; e.g. "vegan", "chill", "salad" instead of hardcoding "veg".
- [ ] Use `prompt-sync` to ask for a keyword before `main()` runs, and store that keyword in a global variable.
- [ ] Update your `aggregate()` function to filter titles based on whether they include the specified keyword (case-insensitive).
- [ ] Run your app and test how the feed changes when using different keywords.

> Tip
> If you want to make it even more dynamic, consider letting users change the keyword live during each update cycle.

2. Display how recently each feed item was published

- [ ] Update the `aggregate()` function to also include the `pubDate` field (if available) from each item.
- [ ] In the `print()` function, compute the age of each item in minutes or hours by comparing `pubDate` to new `Date()`.
- [ ] Display the age of each item in your table under a new column like `Age` or `Published`.
- [ ] If an item is missing a `pubDate`, show `Unknown` or `--`.
