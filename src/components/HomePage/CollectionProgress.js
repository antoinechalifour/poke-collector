import { useUser } from "@auth0/nextjs-auth0";
import useSWR from "swr";

export const CollectionProgress = ({ setId }) => {
  const { user } = useUser();
  const { data } = useSWR(user ? "/api/me/collection/stats" : null);

  if (!data) return null;
  const { progress, collected, total } = data[setId];

  return (
    <div className="root">
      <div style={{ width: `${progress}%` }} />

      <style jsx>{`
        .root {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;

          height: 0.3rem;
          background: var(--color-background-lighter);
        }

        .root div {
          position: absolute;
          height: 100%;
          left: 0;
          background: var(--color-accent);
        }
      `}</style>
    </div>
  );
};
