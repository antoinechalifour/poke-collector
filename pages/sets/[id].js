import axios from "axios";
import Head from "next/head";

import { applyAppLayout } from "../../src/components/Layouts/AppLayout";
import { SetPage } from "../../src/components/SetPage/SetPage";

export default function Set({ set, cards }) {
  return (
    <>
      <Head>
        <title>{set.name}</title>
        <meta name="description" content={`Cards for set "${set.name}"`} />
        <link rel="icon" href={set.images.symbol} />
      </Head>

      <SetPage set={set} cards={cards} />
    </>
  );
}

Set.getLayout = applyAppLayout;

export const getStaticPaths = async () => {
  const sets = await axios
    .get("https://api.pokemontcg.io/v2/sets", {
      headers: { "X-Api-Key": process.env.API_KEY },
    })
    .then((res) => res.data.data);

  return {
    paths: sets.map((set) => ({
      params: { id: set.id },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const [set, cards] = await Promise.all([
    axios
      .get(`https://api.pokemontcg.io/v2/sets/${params.id}`, {
        headers: { "X-Api-Key": process.env.API_KEY },
      })
      .then((res) => res.data.data),
    axios
      .get(`https://api.pokemontcg.io/v2/cards?q=set.id:${params.id}`, {
        headers: { "X-Api-Key": process.env.API_KEY },
      })
      .then((res) => res.data.data),
  ]);

  return {
    props: { set, cards },
  };
};
