export const CardsHTTPAdapter = (http) => {
  const CardsOfSetFetcher = (setId) => (page) =>
    http.get(`/cards?q=set.id:${setId}&page=${page}`).then((res) => res.data);

  async function* pagesOfSet(setId) {
    const fetchPage = CardsOfSetFetcher(setId);
    let page = 1;

    while (true) {
      const pricedAt = Date.now();
      const { data, pageSize, count } = await fetchPage(page);

      yield data.map((card) => Object.assign(card, { priced_at: pricedAt }));

      if (count < pageSize) return;
      else page += 1;
    }
  }

  return {
    ofSet: async (setId) => {
      const cards = [];

      for await (const nextCards of pagesOfSet(setId)) {
        cards.push(...nextCards);
      }

      return cards;
    },
  };
};
