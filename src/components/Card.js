import Image from "next/image";
import { TYPES } from "./Icons";

const Types = ({ types }) => {
  const [primaryType] = types;

  if (!primaryType) return null;

  return (
    <div>
      {TYPES[primaryType]}

      <style jsx>{`
        div {
          position: absolute;
          opacity: 0.05;
          left: 1rem;
          bottom: 1rem;
          right: 1rem;
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

const CardDescription = ({ type, children }) => (
  <>
    <blockquote className={type ? `${type}-background` : "default-background"}>
      {children || "No description available"}
    </blockquote>

    <style jsx>{`
      blockquote {
        display: flex;
        align-items: center;
        height: 12rem;
        border-radius: 1rem;
        padding: 2rem;
        margin: 0 -2rem;
      }

      blockquote.default-background {
        background: rgba(255, 255, 255, 0.05);
      }
    `}</style>
  </>
);

const CardDetails = ({ number, set, rarity, artist, tcgplayer }) => (
  <dl>
    <dt>Number</dt>
    <dd>
      {number}/{set.printedTotal}
    </dd>

    <dt>Rarity</dt>
    <dd>{rarity}</dd>

    <dt>Artist</dt>
    <dd>{artist || "N/A"}</dd>

    {tcgplayer?.prices.normal && (
      <>
        <dt>Price (normal)</dt>
        <dd>${tcgplayer.prices.normal.market}</dd>
      </>
    )}

    {tcgplayer?.prices.reverseHolofoil && (
      <>
        <dt>Price (reverse)</dt>
        <dd>${tcgplayer.prices.reverseHolofoil.market}</dd>
      </>
    )}

    {tcgplayer?.prices.holofoil && (
      <>
        <dt>Price (holographic)</dt>
        <dd>${tcgplayer.prices.holofoil.market}</dd>
      </>
    )}

    <style jsx>{`
      dl {
        min-height: 13rem;
        display: grid;
        align-content: start;
        grid-template-columns: auto 1fr;
        grid-gap: 0.5rem 1rem;
      }

      dt {
        text-align: right;
        font-weight: 600;
      }
    `}</style>
  </dl>
);

const CardImage = ({ url, alt }) => (
  <div>
    <Image layout="fill" src={url} alt={alt} />
    <style jsx>{`
      div {
        position: relative;
        aspect-ratio: 245/342;
      }
    `}</style>
  </div>
);

const Card = ({
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

  return (
    <section>
      <CardImage url={images.small} alt={name} />

      <div>
        <Types types={types} />

        <h2 className={primaryType && `${primaryType}-text`}>{name}</h2>

        <CardDescription type={primaryType}>{flavorText}</CardDescription>

        <CardDetails
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
          background: rgba(0, 0, 0, 0.75);
          padding: 1rem;
          border-radius: 1rem;
          overflow: hidden;
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

        div {
          position: relative;
          padding: 2rem;
          display: grid;
          grid-gap: 1.5rem;
        }
      `}</style>
    </section>
  );
};

export const CardList = ({ cards }) => (
  <ol>
    {cards.map((card) => (
      <li key={card.id}>
        <Card {...card} />
      </li>
    ))}

    <style jsx>{`
      ol {
        padding: 2rem;
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }
    `}</style>
  </ol>
);
