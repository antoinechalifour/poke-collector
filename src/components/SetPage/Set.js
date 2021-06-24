import { SetLogo } from "./SetLogo";
import { SetTitle } from "./SetTitle";
import { SetSummary } from "./SetSummary";

export const SetDetails = ({
  images,
  name,
  printedTotal,
  releaseDate,
  series,
  total,
}) => (
  <div>
    <section>
      <div>
        <SetLogo logoUrl={images.logo} />
        <SetTitle name={name} symbolUrl={images.symbol} />
        <SetSummary
          series={series}
          releaseDate={releaseDate}
          total={total}
          printedTotal={printedTotal}
        />
      </div>
    </section>

    <style jsx>{`
      section {
        position: sticky;
        top: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 62px);
      }

      div {
        position: relative;
        z-index: 1;

        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
  </div>
);
