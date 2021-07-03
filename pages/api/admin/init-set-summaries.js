import { connect } from "@/server/knex";
import { pokemonTcg } from "@/server/api";
import { SetSummariesSQLAdapter } from "@/server/SetSummariesSQLAdapter";
import { CardsHTTPAdapter } from "@/server/CardsHTTPAdapter";
import { SetsHTTPAdapter } from "@/server/SetsHTTPAdapter";
import { requireBasicAuth } from "@/server/basicAuth";
import { InitSetSummaries } from "@/server/InitSetSummaries";

export default requireBasicAuth(async function initSetDataEndpoint(req, res) {
  const connection = connect();

  try {
    const initSetSummaries = InitSetSummaries(
      SetsHTTPAdapter(pokemonTcg),
      CardsHTTPAdapter(pokemonTcg),
      SetSummariesSQLAdapter(connection)
    );

    await initSetSummaries();

    res.status(201).end();
  } finally {
    connection.destroy();
  }
});
