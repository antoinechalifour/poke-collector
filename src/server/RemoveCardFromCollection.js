export const RemoveCardFromCollection =
  (collections) => async (collectorId, setId, cardId) => {
    const collection = await collections.ofCollectorAndSet(collectorId, setId);

    if (!collection) return;

    collection.cards = collection.cards.filter((id) => id !== cardId);

    await collections.save(collection);
  };
