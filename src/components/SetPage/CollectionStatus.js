import axios from "axios";
import useSWR from "swr";
import { AddToCollection } from "./AddToCollection";
import { CollectedBadge } from "./CollectedBadge";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const CollectionStatus = ({ cardId, set }) => {
  const { data } = useSWR(`/api/me/sets/${set.id}/collection`, fetcher);

  if (!data) return null;

  const isCollected = data.cards.includes(cardId);

  return (
    <>
      {isCollected ? (
        <CollectedBadge cardId={cardId} set={set} />
      ) : (
        <AddToCollection cardId={cardId} set={set} />
      )}
    </>
  );
};
