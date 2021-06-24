exports.up = function (knex) {
  return knex.schema.createTable("collections", (table) => {
    table.string("collector_id");
    table.string("set_id");
    table.jsonb("card_ids");
    table.primary(["collector_id", "set_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("collections");
};
