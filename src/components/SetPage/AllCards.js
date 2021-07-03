import { useSearch } from "@/client/search";

import { Card } from "./Card";
import { SearchCardBar } from "./SearchCardBar";

const fuseOptions = {
  includeScore: true,
  useExtendedSearch: true,
  ignoreLocation: true,
  keys: ["name", "rarity"],
};

export const AllCards = ({ cards }) => {
  const { results, handleSearch } = useSearch(cards, fuseOptions);

  return (
    <section className="grid grid-default">
      <SearchCardBar onChange={handleSearch} />

      <ol className="grid grid-default">
        {results.map((card) => (
          <li key={card.id}>
            <Card {...card} />
          </li>
        ))}
      </ol>

      <style jsx>{`
        section {
          grid-template-rows: auto 1fr;
          padding: 2rem;
        }

        ol {
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }
      `}</style>
    </section>
  );
};
