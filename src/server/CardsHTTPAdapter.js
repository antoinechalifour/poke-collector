export const CardsHTTPAdapter = (http) => ({
  ofSet: (setId) =>
    http.get(`/cards?q=set.id:${setId}`).then((res) => res.data.data),
});
