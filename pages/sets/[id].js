import axios from "axios";
import Head from "next/head";

import { applyAppLayout } from "@/components/Layouts/AppLayout";
import { SetPage } from "@/components/SetPage/SetPage";
import { SetsHTTPAdapter } from "@/server/SetsHTTPAdapter";
import { http } from "@/server/http";
import { CardsHTTPAdapter } from "@/server/CardsHTTPAdapter";

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
  const sets = await SetsHTTPAdapter(http).all();

  return {
    paths: sets.map((set) => ({
      params: { id: set.id },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const [set, cards] = await Promise.all([
    SetsHTTPAdapter(http).ofIf(params.id),
    CardsHTTPAdapter(http).ofSet(params.id),
  ]);

  return {
    props: { set, cards },
  };
};
