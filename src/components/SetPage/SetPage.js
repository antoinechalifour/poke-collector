import { memo } from "react";

import { CardAnimationManager } from "../Card/CardAnimationManager";
import { SetDetails } from "./Set";
import { AllCards } from "./AllCards";

const AllCardsMemo = memo(AllCards);

export const SetPage = ({ set, cards }) => (
  <div className="grid">
    <SetDetails {...set} />

    <CardAnimationManager>
      <AllCardsMemo cards={cards} />
    </CardAnimationManager>

    <style jsx>{`
      @media (min-width: 800px) {
        div {
          grid-template-columns: 1fr 3fr;
        }
      }
    `}</style>
  </div>
);
