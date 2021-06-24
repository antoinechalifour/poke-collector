import { getSession } from "@auth0/nextjs-auth0";
import { removeCardFromCollection } from "../../../../../../src/server/removeCardFromCollection";

export default async function collectionCardEndpoint(req, res) {
  const { user } = getSession(req, res);

  if (req.method === "DELETE") {
    await removeCardFromCollection(user.sub, req.query.setId, req.query.cardId);
    res.status(204).end();
  } else {
    res.status(404).end();
  }
}
