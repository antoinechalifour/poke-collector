import { emptyCollection } from "./Collection";

export const RetrieveCollection =
  (collections) => async (collectorId, setId) => {
    const collection = await collections.ofCollectorAndSet(collectorId, setId);

    if (collection) return collection;

    return emptyCollection(collectorId, setId);
  };
