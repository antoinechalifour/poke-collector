import { getSession } from "@auth0/nextjs-auth0";
import { connect } from "@/server/knex";
import { ComputeStats } from "@/server/ComputeStats";
import { SetSummariesSQLAdapter } from "@/server/SetSummariesSQLAdapter";
import { CollectionsSQLAdapter } from "@/server/CollectionsSQLAdapter";

export default async function overallStatsEndpoint(req, res) {
  const { user } = getSession(req, res);
  const connection = connect();

  try {
    const setSummaries = SetSummariesSQLAdapter(connection);
    const collections = CollectionsSQLAdapter(connection);
    const computeStats = ComputeStats(setSummaries, collections);

    res.json(await computeStats(user.sub));
  } finally {
    connection.destroy();
  }
}
