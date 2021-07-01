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
  priced_at,
}) => {
  const [primaryType = "default"] = types;
  const { user } = useUser();

  return (
    <section className="card positioning-parent">
      <header className="positioning-parent">
        <CardImage url={images.small} alt={name} />

        {user && <CollectionStatus cardId={id} set={set} />}
      </header>

      <div className="positioning-parent card-content grid grid-sm">
        <CardTypeBackground types={types} />

        <h2
          className={`typography-heading2 typography-center ${primaryType}-text`}
        >
          {name}
        </h2>

        <CardDescription type={primaryType}>{flavorText}</CardDescription>

        <CardSumary
          cardId={id}
          number={number}
          set={set}
          artist={artist}
          rarity={rarity}
          tcgplayer={tcgplayer}
          pricedAt={priced_at}
        />
      </div>

      <style jsx>{`
        section {
          padding: 0.5rem;
        }
      `}</style>
    </section>
  );
};
