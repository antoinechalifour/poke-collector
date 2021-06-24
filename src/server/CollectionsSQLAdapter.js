const mapper = (row) => ({
  collectorId: row.collector_id,
  setId: row.set_id,
  cards: row.card_ids,
});

export const CollectionsSQLAdapter = (knex) => ({
  ofCollector: (collectorId) =>
    knex
      .from("collections")
      .where({ collector_id: collectorId })
      .then((rows) => rows.map(mapper)),
  ofCollectorAndSet: (collectorId, setId) =>
    knex
      .from("collections")
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
    knex("collections")
      .insert({
        collector_id: collection.collectorId,
        set_id: collection.setId,
        card_ids: JSON.stringify([...collection.cards]),
      })
      .onConflict(["collector_id", "set_id"])
      .merge(),
});
