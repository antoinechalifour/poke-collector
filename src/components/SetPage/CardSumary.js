export const CardSumary = ({ number, set, rarity, artist, tcgplayer }) => (
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
        display: grid;
        align-content: start;
        grid-template-columns: auto 1fr;
        grid-gap: 0.5rem 1rem;
        min-height: 13rem;
      }

      dt {
        text-align: right;
        font-weight: 600;
      }
    `}</style>
  </dl>
);
