import { collectionOfCollectorAndSet } from "./CollectorsSQLAdapter";
import { emptyCollection } from "./Collection";

export const retrieveCollection = async (collectorId, setId) => {
  const collection = await collectionOfCollectorAndSet(collectorId, setId);

  if (collection) return collection;

  return emptyCollection(collectorId, setId);
};
