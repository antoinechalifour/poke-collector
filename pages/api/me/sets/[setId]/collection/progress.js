import { getSession } from "@auth0/nextjs-auth0";

import { connect } from "@/server/knex";
import { CollectionsSQLAdapter } from "@/server/CollectionsSQLAdapter";
import { SetSummariesSQLAdapter } from "@/server/SetSummariesSQLAdapter";
import { ComputeCollectionProgress } from "@/server/ComputeCollectionProgress";

export default async function collectionProgressEndpoint(req, res) {
  const connection = connect();
  const { user } = getSession(req, res);

  try {
    const computeCollectionProgress = ComputeCollectionProgress(
      CollectionsSQLAdapter(connection),
      SetSummariesSQLAdapter(connection)
    );

    res
      .status(200)
      .json(await computeCollectionProgress(user.sub, req.query.setId));
  } finally {
    connection.destroy();
  }
}
