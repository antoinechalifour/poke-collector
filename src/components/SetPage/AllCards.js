import { useMemo, useState } from "react";
import throttle from "lodash.throttle";
import Fuse from "fuse.js";

import { Card } from "./Card";
import { SearchBar } from "./SearchBar";

const fuseOption = {
  includeScore: true,
  useExtendedSearch: true,
  keys: ["name", "rarity"],
};

const useCardsSearch = (allCards) => {
  const [searchResults, setSearchResults] = useState(allCards);
  const fuse = useMemo(() => new Fuse(allCards, fuseOption), [allCards]);

  const handleSearch = throttle(
    (e) => {
      const query = e.target.value;
      const results = query
        ? fuse
            .search(query)
            .filter((result) => result.score <= 0.35)
            .map((x) => x.item)
        : allCards;

      setSearchResults(results);
    },
    150,
    { leading: false }
  );

  return { results: searchResults, handleSearch };
};

export const AllCards = ({ cards }) => {
  const { results, handleSearch } = useCardsSearch(cards);

  return (
    <section>
      <SearchBar onChange={handleSearch} />

      <ol>
        {results.map((card) => (
          <li key={card.id}>
            <Card {...card} />
          </li>
        ))}
      </ol>

      <style jsx>{`
        section {
          display: grid;
          grid-template-rows: auto 1fr;
          padding: 2rem;
          grid-gap: 3rem;
        }

        ol {
          display: grid;
          grid-gap: 2rem;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }
      `}</style>
    </section>
  );
};
