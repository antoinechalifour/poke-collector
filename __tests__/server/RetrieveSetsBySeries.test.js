import { RetrieveSetsBySeries } from "@/server/RetrieveSetsBySeries";
import { SetsInMemory } from "./SetsInMemory";
import { aSet } from "./fixtures";

const firstSetOfSeries1 = aSet({
  id: "set-1",
  series: "Sword & Shield",
  releaseDate: "2021/06/18",
});
const secondSetOfSeries1 = aSet({
  id: "set-2",
  series: "Sword & Shield",
  releaseDate: "2021/03/19",
});
const firstSetOfSeries2 = aSet({
  id: "set-3",
  series: "Other",
  releaseDate: "2019/10/15",
});
const secondSetOfSeries2 = aSet({
  id: "set-4",
  series: "Other",
  releaseDate: "2016/08/19",
});
const firstSetOfSeries3 = aSet({
  id: "set-5",
  series: "Sun & Moon",
  releaseDate: "2017/08/05",
});

async function prepareDataSet(sets) {
  await sets.save(firstSetOfSeries1);
  await sets.save(secondSetOfSeries1);
  await sets.save(firstSetOfSeries2);
  await sets.save(secondSetOfSeries2);
  await sets.save(firstSetOfSeries3);
}

describe("Retrieving sets grouped by series should", () => {
  let retrieveSetsBySeries;
  let sets;

  beforeEach(() => {
    sets = SetsInMemory();
    retrieveSetsBySeries = RetrieveSetsBySeries(sets);
  });

  it("produce a collection of series ordered by the oldest set of the serie", async () => {
    // Arrange
    await prepareDataSet(sets);

    // Act
    const bySeries = await retrieveSetsBySeries();

    // Assert
    expect(bySeries).toEqual([
      {
        series: "Sword & Shield",
        sets: [firstSetOfSeries1, secondSetOfSeries1],
      },
      {
        series: "Sun & Moon",
        sets: [firstSetOfSeries3],
      },
      {
        series: "Other",
        sets: [firstSetOfSeries2, secondSetOfSeries2],
      },
    ]);
  });
});
