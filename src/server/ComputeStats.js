export const ComputeStats =
  (setSummaries, collections) => async (collectorId) => {
    const [userCollections, sets] = await Promise.all([
      collections.ofCollector(collectorId),
      setSummaries.all(),
    ]);

    const result = {};

    for (const set of sets) {
      const collection = userCollections.find(
        (collection) => collection.setId === set.setId
      );
      const collected = collection ? collection.cards.length : 0;
      const total = set.total + set.secrets;
      const progress = ((collected / total) * 100).toFixed(0);

      result[set.setId] = {
        collected,
        total,
        progress,
      };
    }

    return result;
  };
