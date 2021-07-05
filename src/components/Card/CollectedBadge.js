import { RemoveFromCollection } from "./RemoveFromCollection";
import { useCardAnimationManager } from "./CardAnimationManager";

export const CollectedBadge = ({ cardId, set }) => {
  const { isAnimated, doneAnimating } = useCardAnimationManager();
  const animationClass = isAnimated(cardId) ? "is-animated" : "";

  return (
    <p
      className={`positioning-center ${animationClass}`}
      onAnimationEnd={doneAnimating}
    >
      COLLECTED
      <RemoveFromCollection cardId={cardId} set={set} />
      <style jsx>{`
        p {
          display: inline-block;
          padding: 2rem;
          border: 2px solid rgb(var(--rgb-accent-secondary));
          border-radius: 2rem;

          text-align: center;
          font-weight: 600;
          font-family: monospace;
          font-size: 3rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 1px 3px rgb(0 0 0 / 25%);

          background: rgb(var(--rgb-accent-secondary) / 85%);
          color: rgb(0 0 0 / 90%);

          box-shadow: inset 0 2px 3px #fff,
            inset 0 2px 6px rgb(255 255 255 / 75%),
            inset 0 -2px 3px rgb(255 255 255 / 50%),
            inset 0 -2px 6px rgb(255 255 255 / 50%), 0 2px 6px rgb(0 0 0 / 50%);
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
