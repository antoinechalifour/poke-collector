import { getSession } from "@auth0/nextjs-auth0";

import { connect } from "@/server/knex";
import { CollectionsSQLAdapter } from "@/server/CollectionsSQLAdapter";
import { SetOverviewSQLAdapter } from "@/server/SetOverviewSQLAdapter";
import { ComputeStats } from "@/server/ComputeStats";

export default async function collectionStatsEndpoint(req, res) {
  const connection = connect();
  const { user } = getSession(req, res);

  try {
    const collections = CollectionsSQLAdapter(connection);
    const setOverviews = SetOverviewSQLAdapter(connection);
    const computeStats = ComputeStats(collections, setOverviews);

    res.status(200).json(await computeStats(user.sub, req.query.setId));
  } finally {
    connection.destroy();
  }
}
