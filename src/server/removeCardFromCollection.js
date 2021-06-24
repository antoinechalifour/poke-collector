import {
  collectionOfCollectorAndSet,
  saveCollection,
} from "./CollectorsSQLAdapter";

export const removeCardFromCollection = async (collectorId, setId, cardId) => {
  const collection = await collectionOfCollectorAndSet(collectorId, setId);

  if (!collection) return;

  collection.cards = collection.cards.filter((id) => id !== cardId);

  await saveCollection(collection);
};
