export const SetSummary = ({ series, releaseDate, printedTotal, total }) => (
  <dl className="grid-sm summary card-content">
    <dt>Series</dt>
    <dd>{series}</dd>

    <dt>Release date</dt>
    <dd>{releaseDate}</dd>

    <dt># of cards</dt>
    <dd>{printedTotal}</dd>

    <dt># of Secret</dt>
    <dd>{total - printedTotal}</dd>

    <style jsx>{`
      dl {
        display: inline-grid;
        grid-template-columns: auto 1fr;
        padding-top: 0;
      }
    `}</style>
  </dl>
);
