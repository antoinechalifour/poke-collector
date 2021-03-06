import { useUser } from "@auth0/nextjs-auth0";

import { CardSumary } from "./CardSumary";
import { CardImage } from "./CardImage";
import { CollectionStatus } from "./CollectionStatus";
import { CardTarget } from "./CardTarget";

export const Card = ({
  id,
  name,
  images,
  types,
  artist,
  rarity,
  number,
  set,
  tcgplayer,
  pricedAt,
  extraSummary,
  isActive = false,
}) => {
  const [primaryType = "default"] = types;
  const { user } = useUser();
  const cardVariantClass = isActive ? "card-active" : "";

  return (
    <>
      <CardTarget id={id} />
      <section className={`card ${cardVariantClass} positioning-parent`}>
        <header className="positioning-parent">
          <CardImage url={images.large} alt={name} />

          {user && <CollectionStatus cardId={id} set={set} />}
        </header>

        <div className="positioning-parent card-content grid grid-sm">
          <h2
            className={`typography-heading2 typography-center ${primaryType}-text`}
          >
            {name}
          </h2>

          <CardSumary
            cardId={id}
            number={number}
            set={set}
            artist={artist}
            rarity={rarity}
            tcgplayer={tcgplayer}
            pricedAt={pricedAt}
            extras={extraSummary}
          />
        </div>

        <style jsx>{`
          section {
            padding: 0.5rem;
          }
        `}</style>
      </section>
    </>
  );
};
