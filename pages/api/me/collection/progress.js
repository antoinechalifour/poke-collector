import { getSession } from "@auth0/nextjs-auth0";
import { connect } from "@/server/knex";
import { ComputeOverallProgress } from "@/server/ComputeOverallProgress";
import { SetSummariesSQLAdapter } from "@/server/SetSummariesSQLAdapter";
import { CollectionsSQLAdapter } from "@/server/CollectionsSQLAdapter";

export default async function overallProgressEndpoint(req, res) {
  const { user } = getSession(req, res);
  const connection = connect();

  try {
    const computeOverallProgress = ComputeOverallProgress(
      SetSummariesSQLAdapter(connection),
      CollectionsSQLAdapter(connection)
    );

    res.json(await computeOverallProgress(user.sub));
  } finally {
    connection.destroy();
  }
}
