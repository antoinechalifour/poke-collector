export const toSet = ({
  id,
  images,
  name,
  printedTotal,
  releaseDate,
  series,
  total,
}) => ({
  id,
  images,
  name,
  printedTotal,
  releaseDate,
  series,
  total,
});

export const toCard = ({
  id,
  name,
  images,
  types = [],
  artist = null,
  rarity = null,
  number,
  set,
  tcgplayer = null,
  pricedAt,
}) => ({
  id,
  name,
  images,
  types,
  artist,
  rarity,
  number,
  set: toSet(set),
  tcgplayer,
  pricedAt,
});
