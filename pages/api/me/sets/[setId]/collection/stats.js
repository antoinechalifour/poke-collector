import { getSession } from "@auth0/nextjs-auth0";

import { connect } from "@/server/knex";
import { CollectionsSQLAdapter } from "@/server/CollectionsSQLAdapter";
import { SetSummariesSQLAdapter } from "@/server/SetSummariesSQLAdapter";
import { ComputeSetStats } from "@/server/ComputeSetStats";

export default async function collectionStatsEndpoint(req, res) {
  const connection = connect();
  const { user } = getSession(req, res);

  try {
    const computeStats = ComputeSetStats(
      CollectionsSQLAdapter(connection),
      SetSummariesSQLAdapter(connection)
    );

    res.status(200).json(await computeStats(user.sub, req.query.setId));
  } finally {
    connection.destroy();
  }
}
