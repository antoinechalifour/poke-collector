export const InitSetSummaries = (sets, cards, setSummaries) => async () => {
  for (const set of await sets.all()) {
    const { total, printedTotal } = set;
    const setSummary = {
      id: set.id,
      total: printedTotal,
      secrets: total - printedTotal,
      cards: {},
    };

    for (const { id, rarity = "N/A" } of await cards.ofSet(set.id)) {
      setSummary.cards[rarity] = setSummary.cards[rarity] || [];
      setSummary.cards[rarity].push(id);
    }

    await setSummaries.save(setSummary);
  }
};
