export const CollectionsSQLAdapter = (knex) => ({
  ofCollectorAndSet: (collectorId, setId) =>
    knex
      .from("collections")
      .where({
        collector_id: collectorId,
        set_id: setId,
      })
      .first()
      .then((collection) => {
        if (!collection) return null;

        return {
          collectorId: collection.collector_id,
          setId: collection.set_id,
          cards: collection.card_ids,
        };
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
