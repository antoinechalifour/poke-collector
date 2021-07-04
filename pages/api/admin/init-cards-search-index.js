import algoliasearch from "algoliasearch";

import { requireBasicAuth } from "@/server/basicAuth";
import { CardsHTTPAdapter } from "@/server/CardsHTTPAdapter";
import { pokemonTcg } from "@/server/api";
import { SetsHTTPAdapter } from "@/server/SetsHTTPAdapter";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID,
  process.env.ALGOLIA_ADMIN_KEY
);

const toSearchableCard = (card) => ({
  objectID: card.id,
  id: card.id,
  rarity: card.rarity,
  name: card.name,
  image: card.images.small,
  fullName: `${card.name} ${card.number}/${card.set.printedTotal}`,
  setId: card.set.id,
  setSeries: card.set.series,
  setName: card.set.name,
});

export default requireBasicAuth(async function initSearchIndicesEndpoint(
  req,
  res
) {
  const index = searchClient.initIndex("dev_cards");
  await index.clearObjects();
  const sets = await SetsHTTPAdapter(pokemonTcg).all();

  for (const set of sets) {
    const cardsOfSet = await CardsHTTPAdapter(pokemonTcg).ofSet(set.id);
    await index.saveObjects(cardsOfSet.map(toSearchableCard));
  }

  res.end("Ok");
});
