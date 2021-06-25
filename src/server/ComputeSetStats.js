import { makeProgress } from "./Progress";

export const ComputeSetStats =
  (collections, setSummaries) => async (collectorId, setId) => {
    const [collection, setSummary] = await Promise.all([
      collections.ofCollectorAndSet(collectorId, setId),
      setSummaries.ofSetId(setId),
    ]);

    const collectedCards = new Set(collection?.cards || []);
    const collectedCardsCount = collectedCards.size;
    const progress = makeProgress(
      collectedCardsCount,
      setSummary.total + setSummary.secrets
    );

    const byRarity = {};

    for (const [rarity, cards] of Object.entries(setSummary.cards)) {
      let count = 0;

      cards.forEach((id) => {
        if (collectedCards.has(id)) count += 1;
      });

      byRarity[rarity] = makeProgress(count, cards.length);
    }

    return {
      progress,
      byRarity,
    };
  };
