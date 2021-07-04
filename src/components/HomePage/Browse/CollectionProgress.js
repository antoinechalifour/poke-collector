import { useUser } from "@auth0/nextjs-auth0";
import useSWR from "swr";

const ProgressBar = ({ progress }) => (
  <div>
    <span style={{ width: `${progress}%` }} />

    <style jsx>{`
      div {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        height: 0.3rem;
        background: var(--color-background-lighter);
      }

      span {
        position: absolute;
        height: 100%;
        left: 0;
        background: var(--color-accent);
      }
    `}</style>
  </div>
);

export const CollectionProgress = ({ setId }) => {
  const { user } = useUser();
  const { data } = useSWR(user ? "/api/me/collection/progress" : null);

  if (!data) return null;
  const { progress, collected, total } = data[setId];

  return (
    <div>
      <p>
        {collected}/{total}
      </p>

      <ProgressBar progress={progress} />

      <style jsx>{`
        div {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }

        p {
          text-align: right;
          padding: 1rem;
          font-weight: bold;
          font-size: var(--size-text-md);
        }
      `}</style>
    </div>
  );
};
