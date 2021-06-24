const mapper = (row) => ({
  setId: row.id,
  total: row.total,
  secrets: row.secrets,
  cards: row.cards,
});

export const SetOverviewSQLAdapter = (knex) => ({
  all: () => knex("sets").then((rows) => rows.map(mapper)),
  ofSetId: (setId) => knex("sets").where({ id: setId }).first().then(mapper),
});
