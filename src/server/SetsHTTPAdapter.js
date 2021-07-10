import { toSet } from "./mappers";

export const SetsHTTPAdapter = (http) => ({
  all: () =>
    http
      .get("/sets?orderBy=-releaseDate")
      .then((res) => res.data.data.map(toSet)),
  ofId: (setId) =>
    http.get(`/sets/${setId}`).then((res) => toSet(res.data.data)),
});
