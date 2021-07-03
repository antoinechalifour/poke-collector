import { useSearch } from "@/client/search";
import { SecondaryLink } from "@/components/SecondaryLink";
import { CardGrid } from "@/components/CardGrid";

import { SearchCardBar } from "./SearchCardBar";

const fuseOptions = {
  includeScore: true,
  useExtendedSearch: true,
  ignoreLocation: true,
  keys: ["name", "rarity"],
};

const getExtraProps = ({ nationalPokedexNumbers = [] }) => {
  if (!nationalPokedexNumbers[0]) return {};

  const extraSummary = [
    {
      label: "National n°",
      value: (
        <SecondaryLink href={`/pokemon/${nationalPokedexNumbers[0]}`}>
          {nationalPokedexNumbers[0]}
        </SecondaryLink>
      ),
    },
  ];

  return {
    extraSummary,
  };
};

export const AllCards = ({ cards }) => {
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
