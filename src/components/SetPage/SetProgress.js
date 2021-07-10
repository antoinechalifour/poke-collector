import { useUser } from "@auth0/nextjs-auth0";
import useSWR from "swr";
import axios from "axios";

import { ProgressRow } from "./ProgressRow";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const SetProgress = ({ setId }) => {
  const { user } = useUser();
  const { data } = useSWR(
    user ? `/api/me/sets/${setId}/collection/progress` : null,
    fetcher
  );

  if (!data) return <div />;

  return (
    <section className="block-centered card card-content">
      <dl className="grid grid-xs block-centered summary">
        <ProgressRow rarity="Overall progress" progress={data.progress} />

        {Object.keys(data.byRarity).map((rarity) => (
          <ProgressRow
            key={rarity}
            rarity={rarity}
            progress={data.byRarity[rarity]}
          />
        ))}
      </dl>

      <style jsx>
        {`
          section {
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
            max-width: 650px;
            width: 100%;
            position: relative;
            top: -4rem;
          }

          dl {
            width: 100%;
            grid-template-columns: auto 1fr;
            font-size: var(--size-text-sm);
          }
        `}
      </style>
    </section>
  );
};
