import { CardPrice } from "./CardPrice";

export const CardSumary = ({
  cardId,
  number,
  set,
  rarity,
  artist,
  tcgplayer,
  pricedAt,
}) => (
  <dl className="grid grid-xs summary">
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
        <dd>
          <CardPrice
            cardId={cardId}
            price={tcgplayer.prices.normal.market}
            timestamp={pricedAt}
          />
        </dd>
      </>
    )}

    {tcgplayer?.prices.reverseHolofoil && (
      <>
        <dt>Price (reverse)</dt>
        <dd>
          <CardPrice
            cardId={cardId}
            price={tcgplayer.prices.reverseHolofoil.market}
            timestamp={pricedAt}
          />
        </dd>
      </>
    )}

    {tcgplayer?.prices.holofoil && (
      <>
        <dt>Price (holographic)</dt>
        <dd>
          <CardPrice
            cardId={cardId}
            price={tcgplayer.prices.holofoil.market}
            timestamp={pricedAt}
          />
        </dd>
      </>
    )}

    <style jsx>{`
      dl {
        position: relative;
        z-index: 1;
        align-content: start;
        grid-template-columns: auto 1fr;
        min-height: 13rem;
      }
    `}</style>
  </dl>
);
