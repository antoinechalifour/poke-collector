import { searchClient } from "@/server/algolia";
import { SetsHTTPAdapter } from "@/server/SetsHTTPAdapter";
import { pokemonTcg } from "@/server/api";
import { requireBasicAuth } from "@/server/basicAuth";

const toSearchableSet = (set) => ({
  objectID: set.id,
  id: set.id,
  name: set.name,
  releaseDate: set.releaseDate,
  image: set.images.symbol,
  printedTotal: set.printedTotal,
  secrets: set.total - set.printedTotal,
});

export default requireBasicAuth(async function initSetsSearchIndex(req, res) {
  const index = searchClient.initIndex("dev_sets");
  const allSets = await SetsHTTPAdapter(pokemonTcg).all();

  await index.saveObjects(allSets.map(toSearchableSet));

  res.end("Ok");
});
