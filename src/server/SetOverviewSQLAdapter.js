export const SetOverviewSQLAdapter = (knex) => ({
  ofSetId(setId) {
    return knex("sets")
      .where({ id: setId })
      .first()
      .then((row) => ({
        setId,
        total: row.total,
        secrets: row.secrets,
        cards: row.cards,
      }));
  },
});
