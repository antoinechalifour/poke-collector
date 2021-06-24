export const SetsHTTPAdapter = (http) => ({
  all() {
    return http.get("/sets?orderBy=-releaseDate").then((res) => res.data.data);
  },
  ofIf(setId) {
    return http.get(`/sets/${setId}`).then((res) => res.data.data);
  },
});
