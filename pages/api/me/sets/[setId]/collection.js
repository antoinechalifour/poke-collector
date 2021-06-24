import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";

import { RetrieveCollection } from "../../../../../src/server/RetrieveCollection";
import { AddCardToCollection } from "../../../../../src/server/AddCardToCollection";
import { CollectionsSQLAdapter } from "../../../../../src/server/CollectionsSQLAdapter";
import { connect } from "../../../../../src/server/knex";

export default withApiAuthRequired(async function collectionEndpoint(req, res) {
  const { user } = getSession(req, res);
  const connection = connect();

  try {
    const collections = CollectionsSQLAdapter(connection);

    if (req.method === "GET") {
      const retrieveCollection = RetrieveCollection(collections);
      res.json(await retrieveCollection(user.sub, req.query.setId));
    } else if (req.method === "POST") {
      const addCardToCollection = AddCardToCollection(collections);
      await addCardToCollection(user.sub, req.query.setId, req.body.cardId);
      res.status(202).end();
    } else {
      res.status(404).end();
    }
  } finally {
    await connection.destroy();
  }
});
