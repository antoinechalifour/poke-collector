import Head from "next/head";

import { CardsHTTPAdapter } from "@/server/CardsHTTPAdapter";
import { pokeApi, pokemonTcg } from "@/server/api";
import { PokemonsHTTPAdapter } from "@/server/PokemonsHTTPAdapter";
import { applyAppLayout } from "@/components/Layouts/AppLayout";
import { PokemonPage } from "@/components/PokemonPage/PokemonPage";
import { anHour } from "@/time";

export default function Pokemon({ pokemon, cards }) {
  return (
    <>
      <Head>
        <title>{pokemon.name} • Poké Collector</title>
      </Head>

      <PokemonPage pokemon={pokemon} cards={cards} />
    </>
  );
}

Pokemon.getLayout = applyAppLayout;

export const getStaticPaths = () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps = async ({ params }) => {
  const nationalNumber = params.nationalNumber;
  const [pokemon, cards] = await Promise.all([
    PokemonsHTTPAdapter(pokeApi).ofNationalNumber(nationalNumber),
    CardsHTTPAdapter(pokemonTcg).ofPokemon(nationalNumber),
  ]);

  return {
    revalidate: anHour,
    props: {
      cards,
      pokemon,
      subtitle: `#${nationalNumber} ${pokemon.name}`,
    },
  };
};
