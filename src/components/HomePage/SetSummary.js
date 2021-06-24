export const SetSummary = ({ series, releaseDate, total }) => (
  <dl>
    <dt>Series</dt>
    <dd>{series}</dd>

    <dt>Release date</dt>
    <dd>{releaseDate}</dd>

    <dt>Number of cards</dt>
    <dd>{total}</dd>

    <style jsx>{`
      dl {
        display: grid;
        grid-gap: 1rem;
      }

      dt {
        font-weight: bold;
        font-size: 1.2rem;
      }
    `}</style>
  </dl>
);
