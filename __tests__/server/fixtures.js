export const aCollection = (overrides = {}) => ({
  collectorId: "collector-1",
  setId: "set-1",
  cards: ["card-1"],
  ...overrides,
});

export const aSetSummary = (overrides) => ({
  id: "set-2",
  total: 9,
  secrets: 2,
  cards: {
    Common: ["card-1", "card-3", "card-5", "card-7"],
    Uncommon: ["card-2", "card-4"],
    Rare: ["card-6"],
    "Rare Holo V": ["card-8", "card-9"],
    "Rare Secret": ["secret-1", "secret-2"],
  },
  ...overrides,
});
