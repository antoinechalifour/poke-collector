export const CardSumary = ({ number, set, rarity, artist, tcgplayer }) => (
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
        align-content: start;
        grid-template-columns: auto 1fr;
        min-height: 13rem;
      }
    `}</style>
  </dl>
);
