import { SetLogo } from "./SetLogo";
import { SetTitle } from "./SetTitle";
import { SetSummary } from "./SetSummary";
import { SetProgress } from "./SetProgress";

export const SetDetails = ({
  id,
  images,
  name,
  printedTotal,
  releaseDate,
  series,
  total,
}) => (
  <div>
    <section className="grid">
      <div className="positioning-parent">
        <SetLogo logoUrl={images.logo} />
        <SetTitle name={name} symbolUrl={images.symbol} />
        <SetSummary
          series={series}
          releaseDate={releaseDate}
          total={total}
          printedTotal={printedTotal}
        />
      </div>

      <SetProgress setId={id} />
    </section>

    <style jsx>{`
      section {
        position: sticky;
        top: 62px;

        grid-template-rows: 1fr minmax(250px, auto);
        min-height: calc(100vh - 108px);
      }

      section div {
        position: relative;
        margin: auto 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
    `}</style>
  </div>
);
