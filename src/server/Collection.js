export const emptyCollection = (collectorId, setId) => ({
  collectorId,
  setId,
  cards: [],
});

export const addCard = (collection, cardId) => {
  collection.cards = [...new Set([...collection.cards, cardId])];
};
