import axios from "axios";
import { SetDetails } from "../../src/components/Set";
import { CardList } from "../../src/components/Card";
import Head from "next/head";

export default function SetPage({ set, cards }) {
  return (
    <div>
      <Head>
        <title>{set.name}</title>
        <meta name="description" content={`Cards for set "${set.name}"`} />
        <link rel="icon" href={set.images.symbol} />
      </Head>
      <main>
        <SetDetails {...set} />
        <CardList cards={cards} />

        <style jsx>{`
          main {
            display: grid;
          }
          @media (min-width: 800px) {
            main {
              grid-template-columns: 1fr 2fr;
            }
          }
        `}</style>
      </main>
    </div>
  );
}

export const getStaticPaths = async () => {
  const sets = await axios
    .get("https://api.pokemontcg.io/v2/sets", {
      headers: { "X-Api-Key": process.env.API_KEY },
    })
    .then((res) => res.data.data);
  // const sets = stubSets.data;

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
