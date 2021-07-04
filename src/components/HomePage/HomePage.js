import { useSearch } from "@/client/search";

import { QuickSearch } from "./Search/QuickSearch";
import { Series } from "./Browse/Series";
import { SearchSetBar } from "./Browse/SearchSetBar";
import { PokeCollectorTitle } from "./PokeCollectorTitle";

const fuseOptions = {
  includeScore: true,
  includeMatches: true,
  ignoreLocation: true,
  threshold: 0.15,
  minMatchCharLength: 3,
  keys: ["series", "sets.name"],
};

const mapItem = ({ item, matches }) => ({
  ...item,
  sets: matches
    .filter(({ key }) => key === "sets.name")
    .map(({ refIndex }) => item.sets[refIndex]),
});

export const HomePage = ({ setsBySeries }) => {
  const { results, handleSearch } = useSearch(
    setsBySeries,
    fuseOptions,
    mapItem
  );

  return (
    <main className="grid grid-default page-container">
      <PokeCollectorTitle />

      <QuickSearch />

      <h2>Browse sets</h2>

      <div className="grid grid-l">
        <SearchSetBar onChange={handleSearch} />

        {results.map(({ series, sets }) => (
          <Series series={series} sets={sets} key={series} />
        ))}
      </div>

      <style jsx>{`
        h2 {
          font-size: 4rem;
          font-weight: 600;
          text-transform: uppercase;
          border-bottom: 2px solid var(--color-accent);
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          margin-top: 3rem;
        }
      `}</style>
    </main>
  );
};
