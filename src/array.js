import flatMap from "lodash.flatmap";

export const intersperse = (arr, inter) =>
  flatMap(arr, (a, i) => (i ? [inter, a] : [a]));
