import axios from "axios";
import { mutate } from "swr";

export const AddToCollection = ({ cardId, set }) => {
  const handleClick = () =>
    axios
      .post(`/api/me/sets/${set.id}/collection`, { cardId })
      .then(() => mutate(`/api/me/sets/${set.id}/collection`));

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

          font-size: 1.4rem;
          font-family: inherit;
          text-transform: uppercase;
          font-weight: bold;
          cursor: pointer;
          background: rgba(14, 51, 236, 0.75);
          border-radius: 1rem;
          border: none;
          color: #fff;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);

          transition: padding 0.25s ease;
          backdrop-filter: blur(2px);
        }

        button:hover {
          padding-bottom: 1.5rem;
        }
      `}</style>
    </button>
  );
};
