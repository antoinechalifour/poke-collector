import { Fragment } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import useSWR from "swr";
import axios from "axios";

const displayProgress = (progress) =>
  `${progress.collected}/${progress.total} (${progress.progress}%)`;

const fetcher = (url) => axios.get(url).then((res) => res.data);

const ProgressBar = ({ rarity = "default", progress }) => {
  const className = `progressbar-${rarity.split(" ").join("-")}`;

  return (
    <div className="progressbar">
      <div className={className} style={{ width: `${progress}%` }} />

      <style jsx>{`
        .progressbar {
          position: relative;

          height: 0.75rem;
          border-radius: 1rem;
          overflow: hidden;

          background: gray;
        }

        .progressbar div {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;

          background: mediumspringgreen;
          transition: width 0.2s ease;
        }

        .progressbar .progressbar-Rare {
          background: azure;
        }

        .progressbar .progressbar-Common {
          background: azure;
        }

        .progressbar .progressbar-Uncommon {
          background: azure;
        }

        .progressbar .progressbar-Rare-Holo {
          background: azure;
        }

        .progressbar .progressbar-Rare-Ultra {
          background: gold;
        }

        .progressbar .progressbar-Rare-Holo-V {
          background: gold;
        }

        .progressbar .progressbar-Rare-Secret {
          background: gold;
        }

        .progressbar .progressbar-Rare-Rainbow {
          background: gold;
        }

        .progressbar .progressbar-Rare-Holo-VMAX {
          background: gold;
        }
      `}</style>
    </div>
  );
};

export const SetStats = ({ setId }) => {
  const { user } = useUser();
  const { data } = useSWR(
    user ? `/api/me/sets/${setId}/collection/stats` : null,
    fetcher
  );

  if (!data) return null;

  return (
    <dl>
      <dt>Overall progress</dt>
      <dd>
        <ProgressBar progress={data.progress.progress} />
        <span>{displayProgress(data.progress)}</span>
      </dd>

      {Object.keys(data.byRarity).map((rarity) => (
        <Fragment key={rarity}>
          <dt>{rarity}</dt>
          <dd>
            <ProgressBar
              rarity={rarity}
              progress={data.byRarity[rarity].progress}
            />
            <span>{displayProgress(data.byRarity[rarity])}</span>
          </dd>
        </Fragment>
      ))}
      <style jsx>
        {`
          dl {
            display: grid;
            width: 90%;
            margin: 2rem auto;
            grid-gap: 0.5rem 2rem;
            grid-template-columns: auto 1fr;
            font-size: 1rem;
          }

          dt {
            font-weight: bold;
            text-align: right;
          }

          dd {
            display: grid;
            grid-template-columns: 1fr 12ch;
            grid-gap: 1rem;

            align-items: center;
          }

          dd span {
            text-align: right;
          }
        `}
      </style>
    </dl>
  );
};
