import Head from "next/head";

import { HomePage } from "@/components/HomePage/HomePage";
import { applyAppLayout } from "@/components/Layouts/AppLayout";
import { SetsHTTPAdapter } from "@/server/SetsHTTPAdapter";
import { http } from "@/server/http";

export default function Home({ sets }) {
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

      <HomePage sets={sets} />
    </>
  );
}

Home.getLayout = applyAppLayout;

const aWeek = 60 * 60 * 24 * 7;

export const getStaticProps = async () => ({
  props: { sets: await SetsHTTPAdapter(http).all() },
  revalidate: aWeek,
});
