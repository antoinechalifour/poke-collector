import {
  collectionOfCollectorAndSet,
  saveCollection,
} from "./CollectorsSQLAdapter";
import { emptyCollection } from "./Collection";

export async function addCardToCollection(userId, setId, cardId) {
  let collection = await collectionOfCollectorAndSet(userId, setId);

  if (!collection) collection = emptyCollection(userId, setId);

  collection.cards = [...new Set([...collection.cards, cardId])];

  await saveCollection(collection);
}
