import { setProgress } from "@/server/SetProgress";

export const ComputeCollectionProgress =
  (collections, setSummaries) => async (collectorId, setId) => {
    const [collection, setSummary] = await Promise.all([
      collections.ofCollectorAndSet(collectorId, setId),
      setSummaries.ofSetId(setId),
    ]);

    return setProgress(collection, setSummary);
  };
