import { makeProgress } from "./Progress";

export const ComputeStats =
  (collections, setOverviews) => async (collectorId, setId) => {
    const [collection, setOverview] = await Promise.all([
      collections.ofCollectorAndSet(collectorId, setId),
      setOverviews.ofSetId(setId),
    ]);

    const collectedCards = new Set(collection?.cards || []);
    const collectedCardsCount = collectedCards.size;
    const progress = makeProgress(
      collectedCardsCount,
      setOverview.total + setOverview.secrets
    );

    const byRarity = {};

    for (const [rarity, cards] of Object.entries(setOverview.cards)) {
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
