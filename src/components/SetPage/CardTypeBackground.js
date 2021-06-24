import { TYPES } from "../Icons";

export const CardTypeBackground = ({ types }) => {
  const [primaryType] = types;

  if (!primaryType) return null;

  return (
    <div>
      {TYPES[primaryType]}

      <style jsx>{`
        div {
          position: absolute;
          left: 1rem;
          bottom: 1rem;
          right: 1rem;

          opacity: 0.05;
        }

        div :global(svg) {
          display: block;
          width: 50%;
          margin: auto;
        }
      `}</style>
    </div>
  );
};
