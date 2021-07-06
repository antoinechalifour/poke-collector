import Head from "next/head";

import { HomePage } from "@/components/HomePage/HomePage";
import { applyAppLayout } from "@/components/Layouts/AppLayout";
import { SetsHTTPAdapter } from "@/server/SetsHTTPAdapter";
import { pokemonTcg } from "@/server/api";
import { RetrieveSetsBySeries } from "@/server/RetrieveSetsBySeries";
import { aWeek } from "@/time";

export default function Home({ setsBySeries }) {
  return (
    <>
      <Head>
        <title>Home • Poké Collector</title>
        <meta
          name="description"
          content="Track your progress for collecting Pokémon cards"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage setsBySeries={setsBySeries} />
    </>
  );
}

Home.getLayout = applyAppLayout;

export const getStaticProps = async () => {
  const retrieveSetsBySeries = RetrieveSetsBySeries(
    SetsHTTPAdapter(pokemonTcg)
  );

  return {
    props: {
      setsBySeries: await retrieveSetsBySeries(),
      subtitle: "Browse sets",
    },
    revalidate: aWeek,
  };
};
