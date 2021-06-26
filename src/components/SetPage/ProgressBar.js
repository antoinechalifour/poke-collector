export const ProgressBar = ({ rarity = "default", progress }) => {
  const className = `progressbar-${rarity.split(/\s|\./).join("-")}`;

  return (
    <div className="progressbar positioning-parent">
      <div className={className} style={{ width: `${progress}%` }} />

      <style jsx>{`
        .progressbar {
          height: 0.75rem;
          border-radius: var(--size-corner);
          overflow: hidden;

          background: var(--color-background-lighter);
        }

        .progressbar div {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;

          background: mediumspringgreen;
          transition: width 0.2s ease;
        }

        .progressbar .progressbar-Common,
        .progressbar .progressbar-Uncommon,
        .progressbar .progressbar-Rare,
        .progressbar .progressbar-Promo,
        .progressbar .progressbar-Rare-Holo {
          background: azure;
        }

        .progressbar .progressbar-LEGEND,
        .progressbar .progressbar-Rare-Prime,
        .progressbar .progressbar-Rare-Ultra,
        .progressbar .progressbar-Rare-Holo-LV-X,
        .progressbar .progressbar-Rare-Holo-GX,
        .progressbar .progressbar-Rare-Prism-BREAK,
        .progressbar .progressbar-Rare-Prism-Star,
        .progressbar .progressbar-Rare-Holo-V,
        .progressbar .progressbar-Rare-Holo-VMAX,
        .progressbar .progressbar-Rare-Secret,
        .progressbar .progressbar-Rare-Rainbow {
          background: gold;
        }
      `}</style>
    </div>
  );
};
