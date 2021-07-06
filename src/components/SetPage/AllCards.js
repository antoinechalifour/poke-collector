import { useEffect } from "react";
import { useRouter } from "next/router";

import { useSearch } from "@/client/search";
import { CardGrid } from "@/components/CardGrid";

import { SearchCardBar } from "./SearchCardBar";
import { NationalPokedexNumbers } from "./NationalPokedexNumbers";

const fuseOptions = {
  includeScore: true,
  useExtendedSearch: true,
  ignoreLocation: true,
  keys: ["name", "rarity"],
};

const getExtraProps = ({ number, nationalPokedexNumbers = [] }) => {
  if (!nationalPokedexNumbers.length) return {};

  const extraSummary = [
    {
      label: "National n°",
      value: (
        <NationalPokedexNumbers
          cardNumber={number}
          nationalPokedexNumbers={nationalPokedexNumbers}
        />
      ),
    },
  ];

  return {
    extraSummary,
  };
};

const useCleanHashOnScroll = () => {
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      const hasHash = !!window.location.hash;
      const [pathWithoutHash] = router.asPath.split("#");

      if (hasHash)
        router.replace(pathWithoutHash, pathWithoutHash, { shallow: true });
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [router, router.asPath]);
};

const useScrollToCard = (cards) => {
  useEffect(() => {
    const hash = window.location.hash || "";
    const id = hash.replace("#", "");

    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) element.scrollIntoView();
    }, 0);
  }, [cards]);
};

export const AllCards = ({ cards }) => {
  useCleanHashOnScroll();
  useScrollToCard(cards);
  const { results, handleSearch } = useSearch(cards, fuseOptions);

  return (
    <section className="grid grid-default">
      <SearchCardBar onChange={handleSearch} />

      <CardGrid cards={results} getExtraProps={getExtraProps} />

      <style jsx>{`
        section {
          grid-template-rows: auto 1fr;
          padding: 2rem;
        }
      `}</style>
    </section>
  );
};
