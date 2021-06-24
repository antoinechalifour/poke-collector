import { SetDetails } from "./Set";
import { CardList } from "./Card";

export const SetPage = ({ set, cards }) => (
  <>
    <div>
      <SetDetails {...set} />
      <CardList cards={cards} />
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
