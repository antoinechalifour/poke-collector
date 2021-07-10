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
      <SetLogo logoUrl={images.logo} />
      <div>
        <SetTitle name={name} symbolUrl={images.symbol} />
        <SetSummary
          series={series}
          releaseDate={releaseDate}
          total={total}
          printedTotal={printedTotal}
        />
        <SetProgress setId={id} />
      </div>
    </section>

    <style jsx>{`
      section {
        grid-template-columns: 1fr 3fr;
      }
    `}</style>
  </div>
);
