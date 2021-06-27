export const CollectionsInMemory = () => {
  const _collections = [];

  return {
    ofCollector: (collectorId) =>
      _collections.filter(
        (collection) => collection.collectorId === collectorId
      ),
    ofCollectorAndSet: (collectorId, setId) =>
      _collections.find(
        (collection) =>
          collection.collectorId === collectorId && collection.setId === setId
      ) || null,
    save: (collection) => _collections.push(collection),
  };
};
