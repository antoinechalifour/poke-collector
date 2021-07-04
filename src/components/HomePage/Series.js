import { AllSets } from "./AllSets";

export const Series = ({ series, sets }) => (
  <section className="grid grid-default">
    <h3>{series}</h3>
    <AllSets sets={sets} />

    <style jsx>{`
      h3 {
        font-size: 3rem;
        text-transform: uppercase;
        margin-top: 3rem;
      }
    `}</style>
  </section>
);
