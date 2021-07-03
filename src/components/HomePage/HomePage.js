import { useSearch } from "@/client/search";

import { PokeCollectorTitle } from "./PokeCollectorTitle";
import { Series } from "./Series";
import { SearchSetBar } from "./SearchSetBar";

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

      <SearchSetBar onChange={handleSearch} />

      {results.map(({ series, sets }) => (
        <Series series={series} sets={sets} key={series} />
      ))}
    </main>
  );
};
