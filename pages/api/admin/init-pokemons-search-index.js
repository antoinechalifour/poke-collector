import { PokemonsHTTPAdapter } from "@/server/PokemonsHTTPAdapter";
import { pokeApi } from "@/server/api";
import { requireBasicAuth } from "@/server/basicAuth";
import { searchClient } from "@/server/algolia";

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
