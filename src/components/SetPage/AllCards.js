import flatMap from "lodash.flatmap";
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

export const intersperse = (arr, inter) =>
  flatMap(arr, (a, i) => (i ? [inter, a] : [a]));

const getExtraProps = ({ number, nationalPokedexNumbers = [] }) => {
  if (!nationalPokedexNumbers.length) return {};

  const extraSummary = [
    {
      label: "National n°",
      value: (
        <div>
          {intersperse(
            nationalPokedexNumbers.map((nationalNumber) => (
              <SecondaryLink
                id={`link-${number}-${nationalNumber}`}
                key={nationalNumber}
                label="See all cards of this Pokémon"
                href={`/pokemon/${nationalNumber}`}
              >
                {nationalNumber}
              </SecondaryLink>
            )),
            <span>•</span>
          )}

          <style jsx>{`
            div {
              display: flex;
              align-items: center;
            }

            span {
              margin: 0 0.5ch;
            }
          `}</style>
        </div>
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
