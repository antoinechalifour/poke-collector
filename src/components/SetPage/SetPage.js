import { SetDetails } from "./Set";
import { AllCards } from "./AllCards";
import { SetStats } from "./SetStats";

export const SetPage = ({ set, cards }) => (
  <>
    <div>
      <SetDetails {...set} />

      <AllCards cards={cards} />
    </div>

    <style jsx>{`
      div {
        display: grid;
      }

      @media (min-width: 800px) {
        div {
          grid-template-columns: 1fr 2fr;
        }
      }
    `}</style>
  </>
);
