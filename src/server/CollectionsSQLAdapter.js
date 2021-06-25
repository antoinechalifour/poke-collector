const mapper = (row) => ({
  collectorId: row.collector_id,
  setId: row.set_id,
  cards: row.card_ids,
});

const TABLE_NAME = "collections";

export const CollectionsSQLAdapter = (knex) => {
  return {
    ofCollector: (collectorId) =>
      knex
        .from(TABLE_NAME)
        .where({ collector_id: collectorId })
        .then((rows) => rows.map(mapper)),
    ofCollectorAndSet: (collectorId, setId) =>
      knex
        .from(TABLE_NAME)
        .where({
          collector_id: collectorId,
          set_id: setId,
        })
        .first()
        .then((row) => {
          if (!row) return null;

          return mapper(row);
        }),

    save: (collection) =>
      knex(TABLE_NAME)
        .insert({
          collector_id: collection.collectorId,
          set_id: collection.setId,
          card_ids: JSON.stringify([...collection.cards]),
        })
        .onConflict(["collector_id", "set_id"])
        .merge(),
  };
};
