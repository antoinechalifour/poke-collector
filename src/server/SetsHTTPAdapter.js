export const SetsHTTPAdapter = (http) => ({
  all: () =>
    http.get("/sets?orderBy=-releaseDate").then((res) => res.data.data),
  ofIf: (setId) => http.get(`/sets/${setId}`).then((res) => res.data.data),
});
