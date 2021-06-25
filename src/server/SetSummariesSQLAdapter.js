const mapper = (row) => ({
  setId: row.id,
  total: row.total,
  secrets: row.secrets,
  cards: row.cards,
});

const TABLE_NAME = "set_summaries";

export const SetSummariesSQLAdapter = (knex) => ({
  all: () => knex(TABLE_NAME).then((rows) => rows.map(mapper)),
  ofSetId: (setId) =>
    knex(TABLE_NAME).where({ id: setId }).first().then(mapper),
  save: (setSummary) =>
    knex(TABLE_NAME)
      .insert({
        id: setSummary.id,
        total: setSummary.total,
        secrets: setSummary.secrets,
        cards: JSON.stringify(setSummary.cards),
      })
      .onConflict(["id"])
      .merge(),
});
