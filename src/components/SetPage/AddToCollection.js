import axios from "axios";
import { mutate } from "swr";

import { useCardAnimationManager } from "./CardAnimationManager";

const addCardMutator = (cardId) => (collection) => ({
  ...collection,
  cards: [...collection.cards, cardId],
});

const useAddToCollection = (cardId, set) => {
  const { shouldAnimate } = useCardAnimationManager();

  const handleClick = async () => {
    mutate(`/api/me/sets/${set.id}/collection`, addCardMutator(cardId), false);
    shouldAnimate(cardId);

    await axios.post(`/api/me/sets/${set.id}/collection`, { cardId });

    mutate(`/api/me/sets/${set.id}/collection`);
    mutate(`/api/me/sets/${set.id}/collection/stats`);
  };

  return { handleClick };
};

export const AddToCollection = ({ cardId, set }) => {
  const { handleClick } = useAddToCollection(cardId, set);

  return (
    <button onClick={handleClick}>
      Add to collection
      <style jsx>{`
        button {
          position: absolute;
          display: block;
          bottom: 0;
          width: 100%;
          padding: 1rem 2rem;
          border-radius: 1rem;
          border: none;

          font-size: 1.4rem;
          font-family: inherit;
          text-transform: uppercase;
          font-weight: bold;

          color: rgb(0 0 0 / 90%);
          background: rgb(230 29 196 / 80%);
          text-shadow: 0 1px 3px rgb(0 0 0 / 20%);

          cursor: pointer;
          transition: padding 0.25s ease;
        }

        button:hover {
          padding: 1.2rem 2rem;
        }
      `}</style>
    </button>
  );
};
