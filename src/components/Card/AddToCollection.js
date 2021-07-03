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
    mutate(`/api/me/sets/${set.id}/collection/progress`);
  };

  return { handleClick };
};

export const AddToCollection = ({ cardId, set }) => {
  const { handleClick } = useAddToCollection(cardId, set);

  return (
    <button className="button button-fluid" onClick={handleClick}>
      Add to collection
      <style jsx>{`
        button {
          --button-background-opacity: 95%;
          position: absolute;
          bottom: 0;

          box-shadow: 0 -2px 4px rgb(0 0 0 / 40%);
        }
      `}</style>
    </button>
  );
};
