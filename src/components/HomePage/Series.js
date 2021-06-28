import { AllSets } from "./AllSets";

export const Series = ({ series, sets }) => (
  <section className="page-container grid grid-default">
    <h2>{series}</h2>
    <AllSets sets={sets} />

    <style jsx>{`
      h2 {
        font-size: 3rem;
        border-bottom: 2px solid var(--color-accent);
        text-transform: uppercase;
        font-weight: 600;
        margin-top: 4rem;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
      }
    `}</style>
  </section>
);
