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
          border: 2px solid blue;
          border-radius: 2rem;

          text-align: center;
          font-weight: 600;
          font-family: monospace;
          font-size: 3rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

          background: rgba(0, 0, 255, 0.75);
          color: #fff;

          box-shadow: inset 0 2px 3px #fff,
            inset 0 -2px 3px rgba(255, 255, 255, 0.5),
            0 1px 6px rgba(0, 0, 0, 0.5);
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
