import { AddCardToCollection } from "@/server/AddCardToCollection";
import { CollectionsInMemory } from "./CollectionsInMemory";
import { aCollection } from "./fixtures";

describe("Adding a card to a non-existing collection should", () => {
  let addCardToCollection;
  let collections;

  beforeEach(async () => {
    collections = CollectionsInMemory();
    addCardToCollection = AddCardToCollection(collections);

    await collections.save(
      aCollection({ collectorId: "collector-2", setId: "set-2" })
    );
  });

  it("add the card to a new collection", async () => {
    // Arrange
    let collectorId = "collector-2";
    let setId = "set-2";

    // Act
    await addCardToCollection(collectorId, setId, "card-2");

    // Assert
    expect(await collections.ofCollectorAndSet(collectorId, setId)).toEqual({
      collectorId,
      setId,
      cards: ["card-1", "card-2"],
    });
  });
});
