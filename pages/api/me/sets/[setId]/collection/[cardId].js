import { getSession } from "@auth0/nextjs-auth0";

import { RemoveCardFromCollection } from "@/server/RemoveCardFromCollection";
import { CollectionsSQLAdapter } from "@/server/CollectionsSQLAdapter";
import { connect } from "@/server/knex";

export default async function collectionCardEndpoint(req, res) {
  const { user } = getSession(req, res);
  const connection = connect();

  try {
    if (req.method === "DELETE") {
      const removeCardFromCollection = RemoveCardFromCollection(
        CollectionsSQLAdapter(connection)
      );
      await removeCardFromCollection(
        user.sub,
        req.query.setId,
        req.query.cardId
      );
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } finally {
    connection.destroy();
  }
}
