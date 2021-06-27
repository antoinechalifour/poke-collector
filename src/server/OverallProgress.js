export function overallProgress(sets, collections) {
  const result = {};

  for (const set of sets) {
    const collection = collections.find(
      (collection) => collection.setId === set.id
    );
    const collected = collection ? collection.cards.length : 0;
    const total = set.total + set.secrets;
    const progress = ((collected / total) * 100).toFixed(0);

    result[set.id] = {
      collected,
      total,
      progress,
    };
  }
  return result;
}
