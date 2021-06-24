import { getSession } from "@auth0/nextjs-auth0";
import { connect } from "@/server/knex";
import { ComputeStats } from "@/server/ComputeStats";
import { SetOverviewSQLAdapter } from "@/server/SetOverviewSQLAdapter";
import { CollectionsSQLAdapter } from "@/server/CollectionsSQLAdapter";

export default async function overallStatsEndpoint(req, res) {
  const { user } = getSession(req, res);
  const connection = connect();

  try {
    const setOverviews = SetOverviewSQLAdapter(connection);
    const collections = CollectionsSQLAdapter(connection);
    const computeStats = ComputeStats(setOverviews, collections);

    res.json(await computeStats(user.sub));
  } finally {
    connection.destroy();
  }
}
