export const SetSummary = ({ series, releaseDate, total }) => (
  <dl className="grid grid-sm details">
    <dt>Series</dt>
    <dd>{series}</dd>

    <dt>Release date</dt>
    <dd>{releaseDate}</dd>

    <dt>Number of cards</dt>
    <dd>{total}</dd>
  </dl>
);
