import { useUser } from "@auth0/nextjs-auth0";

import { CardTypeBackground } from "./CardTypeBackground";
import { CardDescription } from "./CardDescription";
import { CardSumary } from "./CardSumary";
import { CardImage } from "./CardImage";
import { CollectionStatus } from "./CollectionStatus";

export const Card = ({
  id,
  name,
  images,
  types = [],
  artist,
  flavorText,
  rarity,
  number,
  set,
  tcgplayer,
}) => {
  const [primaryType] = types;
  const { user } = useUser();

  return (
    <section>
      <header>
        <CardImage url={images.small} alt={name} />

        {user && <CollectionStatus cardId={id} set={set} />}
      </header>

      <div>
        <CardTypeBackground types={types} />

        <h2 className={primaryType && `${primaryType}-text`}>{name}</h2>

        <CardDescription type={primaryType}>{flavorText}</CardDescription>

        <CardSumary
          number={number}
          set={set}
          artist={artist}
          rarity={rarity}
          tcgplayer={tcgplayer}
        />
      </div>

      <style jsx>{`
        section {
          position: relative;
          padding: 1rem;
          border-radius: 1rem;
          overflow: hidden;

          background: rgba(0, 0, 0, 0.75);
        }

        img {
          display: block;
          width: 100%;
        }

        h2 {
          text-align: center;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 2.4rem;
        }

        header {
          position: relative;
        }

        div {
          position: relative;

          display: grid;
          grid-gap: 1.5rem;
          padding: 2rem;
        }
      `}</style>
    </section>
  );
};
