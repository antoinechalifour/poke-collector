import { RemoveFromCollection } from "./RemoveFromCollection";
import { useCardAnimationManager } from "./CardAnimationManager";

export const CollectedBadge = ({ cardId, set }) => {
  const { isAnimated, doneAnimating } = useCardAnimationManager();

  return (
    <p
      className={isAnimated(cardId) && "is-animated"}
      onAnimationEnd={doneAnimating}
    >
      COLLECTED
      <RemoveFromCollection cardId={cardId} set={set} />
      <style jsx>{`
        p {
          position: absolute;
          top: 50%;
          left: 50%;

          display: inline-block;
          padding: 2rem;
          border: 2px solid rgb(230 29 196);
          border-radius: 2rem;

          text-align: center;
          font-weight: 600;
          font-family: monospace;
          font-size: 3rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 1px 3px rgb(0 0 0 / 25%);

          background: rgb(230 29 196 / 75%);
          color: rgb(0 0 0 / 90%);

          box-shadow: inset 0 2px 3px #fff,
            inset 0 2px 6px rgb(255 255 255 / 75%),
            inset 0 -2px 3px rgb(255 255 255 / 50%),
            inset 0 -2px 6px rgb(255 255 255 / 50%), 0 1px 6px rgb(0 0 0 / 50%);
          transform-origin: top left;
          transform: rotate(-15deg) translate(-50%, -50%);
        }

        .is-animated {
          animation: badge-enter 0.2s ease forwards;
        }

        @keyframes badge-enter {
          from {
            transform: rotate(50deg) perspective(100px) translateZ(40px)
              translate(-50%, -50%);
          }

          to {
            transform: rotate(-15deg) perspective(100px) translateZ(0)
              translate(-50%, -50%);
          }
        }
      `}</style>
    </p>
  );
};
