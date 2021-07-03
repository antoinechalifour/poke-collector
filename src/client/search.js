import Fuse from "fuse.js";
import { useMemo, useState } from "react";

const defaultMapItem = ({ item }) => item;

export const searchDataSet = ({
  fuse,
  query,
  defaultResults,
  mapItem = defaultMapItem,
}) =>
  query
    ? fuse
        .search(query)
        .filter((result) => result.score <= 0.35)
        .map(mapItem)
    : defaultResults;

export const useSearch = (dataSet, fuseOptions, mapItem) => {
  const [results, setResults] = useState(dataSet);
  const fuse = useMemo(() => new Fuse(dataSet, fuseOptions), [dataSet]);

  const handleSearch = (query) =>
    setResults(
      searchDataSet({
        fuse,
        query,
        defaultResults: dataSet,
        mapItem,
      })
    );

  return { results, handleSearch };
};
