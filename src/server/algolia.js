import algoliasearch from "algoliasearch";

export const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID,
  process.env.ALGOLIA_ADMIN_KEY
);
