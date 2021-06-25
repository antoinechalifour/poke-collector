const TABLE_NAME = "set_summaries";

exports.up = async function (knex) {
  await knex.schema.createTable(TABLE_NAME, async (table) => {
    table.string("id").primary();
    table.integer("total");
    table.integer("secrets");
    table.jsonb("cards");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("sets");
};
