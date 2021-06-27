import { ComputeOverallProgress } from "@/server/ComputeOverallProgress";
import { SetSummariesInMemory } from "./SetSummariesInMemory";
import { CollectionsInMemory } from "./CollectionsInMemory";
import { aCollection, aSetSummary } from "./fixtures";

const prepareDataSet = async (setSummaries, collections) => {
  const set1 = aSetSummary({
    id: "set-1",
    total: 1,
    secrets: 1,
    cards: {
      Common: ["card-1"],
      "Rare Secret": ["card-2"],
    },
  });
  const set2 = aSetSummary({
    id: "set-2",
    total: 2,
    secrets: 0,
    cards: {
      Common: ["card-3", "card-4"],
    },
  });
  const set3 = aSetSummary({
    id: "set-3",
    total: 1,
    secrets: 0,
    cards: {
      Common: ["card-5"],
    },
  });

  await setSummaries.save(set1);
  await setSummaries.save(set2);
  await setSummaries.save(set3);

  const collectionOfOtherCollector = aCollection({
    collectorId: "other-collector",
  });
  const completeCollection = aCollection({
    collectorId: "collector-1",
    setId: "set-1",
    cards: ["card-1", "card-2"],
  });
  const partialCollection = aCollection({
    collectorId: "collector-1",
    setId: "set-2",
    cards: ["card-3"],
  });

  await collections.save(collectionOfOtherCollector);
  await collections.save(completeCollection);
  await collections.save(partialCollection);
};

describe("Computing the overall progress of a collector should", () => {
  let setSummaries;
  let collections;
  let computeOverallProgress;

  beforeEach(async () => {
    setSummaries = SetSummariesInMemory();
    collections = CollectionsInMemory();
    computeOverallProgress = ComputeOverallProgress(setSummaries, collections);

    await prepareDataSet(setSummaries, collections);
  });

  it("produce the progress for each set", async () => {
    // Arrange
    const collectorId = "collector-1";

    // Act
    const progress = await computeOverallProgress(collectorId);

    // Assert
    expect(progress).toEqual({
      "set-1": {
        collected: 2,
        progress: "100",
        total: 2,
      },
      "set-2": {
        collected: 1,
        progress: "50",
        total: 2,
      },
      "set-3": {
        collected: 0,
        progress: "0",
        total: 1,
      },
    });
  });
});
