import { overallProgress } from "@/server/OverallProgress";

export const ComputeOverallProgress =
  (setSummaries, collections) => async (collectorId) => {
    const [collectionsOfCollector, sets] = await Promise.all([
      collections.ofCollector(collectorId),
      setSummaries.all(),
    ]);

    return overallProgress(sets, collectionsOfCollector);
  };
