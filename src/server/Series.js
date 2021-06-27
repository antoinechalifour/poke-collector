import { isNewerSetThan } from "@/server/Set";

const last = (arr) => arr[arr.length - 1];

export const makeSeries = (series, setsOfSeries) => ({
  series,
  sets: setsOfSeries.sort((set1, set2) =>
    isNewerSetThan(set1, set2) ? 1 : -1
  ),
});

export const olderSetOfSeries = (series) => last(series.sets);
