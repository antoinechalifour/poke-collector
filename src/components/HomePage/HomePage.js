import { AllSets } from "./AllSets";

export const HomePage = ({ sets }) => (
  <main>
    <h1 className="block-centered typography-display positioning-parent has-after positioning-after-center-x">
      Poké Collector
    </h1>

    <AllSets sets={sets} />

    <style jsx>{`
      h1 {
        text-align: center;
        margin-top: 4rem;
        margin-bottom: 4rem;
        padding-bottom: 4rem;
      }

      h1:after {
        bottom: 0;

        width: 25%;
        height: 0.3rem;
        border-radius: 1rem;

        background: var(--color-background-lighter);
      }
    `}</style>
  </main>
);
