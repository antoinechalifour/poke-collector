import { memo } from "react";
import { SetDetails } from "./Set";
import { AllCards } from "./AllCards";
import { CardAnimationManager } from "./CardAnimationManager";

const AllCardsMemo = memo(AllCards);

export const SetPage = ({ set, cards }) => (
  <>
    <div>
      <SetDetails {...set} />

      <CardAnimationManager>
        <AllCardsMemo cards={cards} />
      </CardAnimationManager>
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
