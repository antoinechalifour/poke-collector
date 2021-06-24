export const makeProgress = (collected, total) => ({
  collected,
  total,
  progress: ((collected / total) * 100).toFixed(0),
});
