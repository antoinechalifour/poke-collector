import axios from "axios";
import { mutate } from "swr";

const removeCardMutator = (cardId) => (collection) => ({
  ...collection,
  cards: collection.cards.filter((id) => id !== cardId),
});

export const RemoveFromCollection = ({ cardId, set }) => {
  const handleClick = () => {
    mutate(
      `/api/me/sets/${set.id}/collection`,
      removeCardMutator(cardId),
      false
    );

    return axios
      .delete(`/api/me/sets/${set.id}/collection/${cardId}`)
      .then(() => {
        mutate(`/api/me/sets/${set.id}/collection`);
        mutate(`/api/me/sets/${set.id}/collection/stats`);
      });
  };

  return (
    <button onClick={handleClick} aria-label="Remove from collection">
      ❌
      <style jsx>{`
        button {
          position: absolute;
          right: 0;
          top: 0;

          display: block;
          width: 3rem;
          aspect-ratio: 1;
          border-radius: 50%;
          border: 2px solid #000;

          cursor: pointer;
          background: #171717;

          transform: translate(50%, -50%) scale(1);
          transition: transform 0.25s ease;
        }

        button:hover {
          transform: translate(50%, -50%) scale(1.1);
        }
      `}</style>
    </button>
  );
};
