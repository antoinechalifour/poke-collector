import { getSession } from "@auth0/nextjs-auth0";

import { connect } from "@/server/knex";
import { CollectionsSQLAdapter } from "@/server/CollectionsSQLAdapter";
import { SetSummariesSQLAdapter } from "@/server/SetSummariesSQLAdapter";
import { ComputeSetStats } from "@/server/ComputeSetStats";

export default async function collectionStatsEndpoint(req, res) {
  const connection = connect();
  const { user } = getSession(req, res);

  try {
    const collections = CollectionsSQLAdapter(connection);
    const setSummaries = SetSummariesSQLAdapter(connection);
    const computeStats = ComputeSetStats(collections, setSummaries);

    res.status(200).json(await computeStats(user.sub, req.query.setId));
  } finally {
    connection.destroy();
  }
}
