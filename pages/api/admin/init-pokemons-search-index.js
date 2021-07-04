import { PokemonsHTTPAdapter } from "@/server/PokemonsHTTPAdapter";
import { pokeApi } from "@/server/api";
import { requireBasicAuth } from "@/server/basicAuth";
import algoliasearch from "algoliasearch";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID,
  process.env.ALGOLIA_ADMIN_KEY
);

const toSearchablePokemon = (pokemon) => ({
  objectID: pokemon.id,
  ...pokemon,
});

export default requireBasicAuth(async function initPokemonsSearchIndexEndpoint(
  req,
  res
) {
  const index = searchClient.initIndex("dev_pokemons");
  await index.clearObjects();
  const pokemons = await PokemonsHTTPAdapter(pokeApi).all();
  await index.saveObjects(pokemons.map(toSearchablePokemon));

  res.end("Ok");
});
