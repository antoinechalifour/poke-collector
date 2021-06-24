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
        font-family: monospace;
        font-size: 3rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

        background: rgba(255, 0, 0, 0.75);
        color: #fff;

        box-shadow: inset 0 2px 3px #fff,
          inset 0 -2px 3px rgba(255, 255, 255, 0.5),
          0 1px 6px rgba(0, 0, 0, 0.5);

        transform-origin: top left;
        animation: badge-enter 0.35s ease forwards;
      }

      @keyframes badge-enter {
        from {
          opacity: 0;
          transform: rotate(1turn) perspective(100px) translateZ(75px)
            translate(-50%, -50%);
        }

        to {
          opacity: 1;
          transform: rotate(-15deg) perspective(100px) translateZ(0)
            translate(-50%, -50%);
        }
      }
    `}</style>
  </p>
);
