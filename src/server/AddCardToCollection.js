import { addCard, emptyCollection } from "./Collection";

export const AddCardToCollection =
  (collections) => async (userId, setId, cardId) => {
    let collection = await collections.ofCollectorAndSet(userId, setId);

    if (!collection) collection = emptyCollection(userId, setId);

    addCard(collection, cardId);

    await collections.save(collection);
  };
