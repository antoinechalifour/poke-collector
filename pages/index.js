import Head from "next/head";

import { HomePage } from "@/components/HomePage/HomePage";
import { applyAppLayout } from "@/components/Layouts/AppLayout";
import { SetsHTTPAdapter } from "@/server/SetsHTTPAdapter";
import { http } from "@/server/http";
import { RetrieveSetsBySeries } from "@/server/RetrieveSetsBySeries";

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

const aWeek = 60 * 60 * 24 * 7;

export const getStaticProps = async () => {
  const retrieveSetsBySeries = RetrieveSetsBySeries(SetsHTTPAdapter(http));

  return {
    props: { setsBySeries: await retrieveSetsBySeries() },
    revalidate: aWeek,
  };
};
