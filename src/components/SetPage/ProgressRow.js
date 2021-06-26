import { ProgressBar } from "./ProgressBar";

const displayProgress = (progress) =>
  `${progress.collected}/${progress.total} (${progress.progress}%)`;

export const ProgressRow = ({ rarity, progress }) => (
  <>
    <dt>{rarity}</dt>
    <dd className="grid grid-default grid-center-x">
      <ProgressBar rarity={rarity} progress={progress.progress} />
      <span>{displayProgress(progress)}</span>
    </dd>

    <style jsx>{`
      dd {
        grid-template-columns: 1fr 12ch;
      }

      dd span {
        text-align: right;
      }
    `}</style>
  </>
);
