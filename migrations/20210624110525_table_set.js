const axios = require("axios");

const http = axios.create({
  baseURL: "https://api.pokemontcg.io/v2",
  headers: { "X-Api-Key": process.env.API_KEY },
});

const allSets = () => http.get("/sets").then((res) => res.data.data);
const cardsOfSet = (setId) =>
  http.get(`/cards?q=set.id:${setId}`).then((res) => res.data.data);

exports.up = async function (knex) {
  await knex.schema.createTable("sets", async (table) => {
    table.string("id").primary();
    table.integer("total");
    table.integer("secrets");
    table.jsonb("cards");
  });

  for (const set of await allSets()) {
    const { total, printedTotal } = set;
    const setItem = {
      id: set.id,
      total: printedTotal,
      secrets: total - printedTotal,
      cards: {},
    };

    for (const { id, rarity = "N/A" } of await cardsOfSet(set.id)) {
      setItem.cards[rarity] = setItem.cards[rarity] || [];

      setItem.cards[rarity].push(id);
    }

    await knex("sets").insert({
      id: setItem.id,
      total: setItem.total,
      secrets: setItem.secrets,
      cards: JSON.stringify(setItem.cards),
    });
  }
};

exports.down = function (knex) {
  return knex.schema.dropTable("sets");
};
