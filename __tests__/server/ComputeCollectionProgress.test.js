import { ComputeCollectionProgress } from "@/server/ComputeCollectionProgress";
import { CollectionsInMemory } from "./CollectionsInMemory";
import { SetSummariesInMemory } from "./SetSummariesInMemory";
import { aCollection, aSetSummary } from "./fixtures";

const prepareDataSet = async (
  setId,
  collectorId,
  setSummaries,
  collections
) => {
  const setSummary = aSetSummary({ id: setId });
  const collection = aCollection({
    collectorId,
    setId,
    cards: ["card-3", "card-2", "card-4", "card-9", "secret-1", "secret-2"],
  });

  await setSummaries.save(setSummary);
  await collections.save(collection);
};

describe("Computing the progress of an existing collection on a set should", () => {
  let computeCollectionProgress;
  let collections;
  let setSummaries;

  beforeEach(() => {
    collections = CollectionsInMemory();
    setSummaries = SetSummariesInMemory();
    computeCollectionProgress = ComputeCollectionProgress(
      collections,
      setSummaries
    );
  });

  it("produce the overall progress, as well as the progress by rarity", async () => {
    // Arrange
    const setId = "set-2";
    const collectorId = "collector-100";
    await prepareDataSet(setId, collectorId, setSummaries, collections);

    // Act
    const progress = await computeCollectionProgress(collectorId, setId);

    // Assert
    expect(progress).toEqual({
      byRarity: {
        Common: {
          collected: 1,
          progress: "25",
          total: 4,
        },
        Uncommon: {
          collected: 2,
          progress: "100",
          total: 2,
        },
        Rare: {
          collected: 0,
          progress: "0",
          total: 1,
        },
        "Rare Holo V": {
          collected: 1,
          progress: "50",
          total: 2,
        },
        "Rare Secret": {
          collected: 2,
          progress: "100",
          total: 2,
        },
      },
      progress: {
        collected: 6,
        total: 11,
        progress: "55",
      },
    });
  });
});
