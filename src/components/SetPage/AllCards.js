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

export const AllCards = ({ cards }) => {
  const { results, handleSearch } = useSearch(cards, fuseOptions);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      const [url, hash] = router.asPath.split("#");

      if (hash) router.replace(url, url, { shallow: true });
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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
