import { getSession } from "@auth0/nextjs-auth0";

import { RemoveCardFromCollection } from "../../../../../../src/server/removeCardFromCollection";
import { CollectionsSQLAdapter } from "../../../../../../src/server/CollectionsSQLAdapter";
import { connect } from "../../../../../../src/server/knex";

export default async function collectionCardEndpoint(req, res) {
  const { user } = getSession(req, res);
  const connection = connect();

  try {
    const collections = CollectionsSQLAdapter(connection);

    if (req.method === "DELETE") {
      const removeCardFromCollection = RemoveCardFromCollection(collections);
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
    await connection.destroy();
  }
}
