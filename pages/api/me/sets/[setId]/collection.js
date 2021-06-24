import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";

import { retrieveCollection } from "../../../../../src/server/retrieveCollection";
import { addCardToCollection } from "../../../../../src/server/addCardToCollection";

export default withApiAuthRequired(async function collectionEndpoint(req, res) {
  const { user } = getSession(req, res);

  if (req.method === "GET") {
    res.json(await retrieveCollection(user.sub, req.query.setId));
  } else if (req.method === "POST") {
    await addCardToCollection(user.sub, req.query.setId, req.body.cardId);
    res.status(202).end();
  } else {
    res.status(404).end();
  }
});
