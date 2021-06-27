import { isNewerSetThan } from "./Set";
import { makeSeries, olderSetOfSeries } from "./Series";

export const RetrieveSetsBySeries = (sets) => async () => {
  const bySeries = {};

  for (const set of await sets.all()) {
    bySeries[set.series] = bySeries[set.series] || [];

    bySeries[set.series].push(set);
  }

  const result = [];

  for (const [series, setsOfSeries] of Object.entries(bySeries)) {
    result.push(makeSeries(series, setsOfSeries));
  }

  return result.sort((series1, series2) =>
    isNewerSetThan(olderSetOfSeries(series1), olderSetOfSeries(series2))
      ? 1
      : -1
  );
};
