import React from "react";

import { CardPrice } from "./CardPrice";

export const CardSumary = ({
  cardId,
  number,
  set,
  rarity,
  artist,
  tcgplayer,
  pricedAt,
  extras = [],
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

    <dt>Price (normal)</dt>
    <dd>
      <CardPrice
        cardId={cardId}
        price={tcgplayer?.prices.normal?.market}
        timestamp={pricedAt}
      />
    </dd>

    <dt>Price (reverse)</dt>
    <dd>
      <CardPrice
        cardId={cardId}
        price={tcgplayer?.prices.reverseHolofoil?.market}
        timestamp={pricedAt}
      />
    </dd>

    <dt>Price (holo)</dt>
    <dd>
      <CardPrice
        cardId={cardId}
        price={tcgplayer?.prices.holofoil?.market}
        timestamp={pricedAt}
      />
    </dd>

    {extras.map(({ label, value }) => (
      <React.Fragment key={label}>
        <dt>{label}</dt>
        <dd>{value}</dd>
      </React.Fragment>
    ))}

    <style jsx>{`
      dl {
        position: relative;
        z-index: 1;
        align-content: start;
        grid-template-columns: 14ch 1fr;
        min-height: 13rem;
      }

      dd {
        width: 100%;
        overflow: hidden;
      }
    `}</style>
  </dl>
);
