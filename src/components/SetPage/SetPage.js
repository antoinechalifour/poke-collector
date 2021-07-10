import { memo } from "react";

import { CardAnimationManager } from "../Card/CardAnimationManager";
import { SetDetails } from "./Set";
import { AllCards } from "./AllCards";

const AllCardsMemo = memo(AllCards);

export const SetPage = ({ set, cards }) => (
  <div className="grid grid-default page-container">
    <SetDetails {...set} />

    <CardAnimationManager>
      <AllCardsMemo cards={cards} />
    </CardAnimationManager>
  </div>
);
