import { RemoveFromCollection } from "./RemoveFromCollection";

export const CollectedBadge = ({ cardId, set }) => (
  <p>
    COLLECTED
    <RemoveFromCollection cardId={cardId} set={set} />
    <style jsx>{`
      p {
        position: absolute;
        top: 50%;
        left: 50%;

        display: inline-block;
        padding: 2rem;
        border: 2px solid red;
        border-radius: 2rem;

        text-align: center;
        font-weight: 600;
        font-size: 3rem;
        text-transform: uppercase;

        background: rgba(255, 0, 0, 0.75);
        color: #fff;

        transform: rotate(-15deg) translate(-50%, -50%);
      }
    `}</style>
  </p>
);
