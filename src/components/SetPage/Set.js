import { SetLogo } from "./SetLogo";
import { SetTitle } from "./SetTitle";
import { SetSummary } from "./SetSummary";
import { SetStats } from "@/components/SetPage/SetStats";

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

      <SetStats setId={id} />
    </section>

    <style jsx>{`
      section {
        position: sticky;
        top: 62px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: calc(100vh - 62px);
      }

      section div {
        position: relative;
        z-index: 1;

        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
    `}</style>
  </div>
);
