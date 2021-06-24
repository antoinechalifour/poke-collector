export const CardsHTTPAdapter = (http) => ({
  ofSet(setId) {
    return http.get(`/cards?q=set.id:${setId}`).then((res) => res.data.data);
  },
});
