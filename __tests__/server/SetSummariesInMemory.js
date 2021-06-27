export const SetSummariesInMemory = () => {
  const _setSummaries = [];

  return {
    all: () => _setSummaries,
    ofSetId: (setId) =>
      _setSummaries.find((setSummary) => setSummary.id === setId) || null,
    save: (setSummary) => _setSummaries.push(setSummary),
  };
};
