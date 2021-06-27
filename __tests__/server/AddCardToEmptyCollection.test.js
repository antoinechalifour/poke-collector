import { AddCardToCollection } from "@/server/AddCardToCollection";
import { CollectionsInMemory } from "./CollectionsInMemory";
import { aCollection } from "./fixtures";

describe("Adding a card to a non-existing collection should", () => {
  let addCardToCollection;
  let collections;

  beforeEach(async () => {
    collections = CollectionsInMemory();
    addCardToCollection = AddCardToCollection(collections);

    const collectionOfOtherCollector = aCollection({
      collectorId: "collector-22",
      setId: "set-1",
    });

    await collections.save(collectionOfOtherCollector);
  });

  it("add the card to a new collection", async () => {
    // Arrange
    let collectorId = "collector-1";
    let setId = "set-1";

    // Act
    await addCardToCollection(collectorId, setId, "card-1");

    // Assert
    expect(await collections.ofCollectorAndSet(collectorId, setId)).toEqual({
      collectorId,
      setId,
      cards: ["card-1"],
    });
  });
});
