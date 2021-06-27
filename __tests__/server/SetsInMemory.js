export const SetsInMemory = () => {
  const _sets = [];

  return {
    all: () => _sets,
    save: (set) => _sets.push(set),
  };
};
