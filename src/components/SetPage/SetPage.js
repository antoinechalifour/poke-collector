import { SetDetails } from "./Set";
import { AllCards } from "./AllCards";

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
