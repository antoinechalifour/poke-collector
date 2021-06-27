import { AllSets } from "./AllSets";

export const HomePage = ({ setsBySeries }) => (
  <main>
    <h1 className="block-centered typography-display positioning-parent has-after positioning-after-center-x">
      Poké Collector
    </h1>

    {setsBySeries.map(({ series, sets }) => (
      <section className="page-container grid grid-default" key={series}>
        <h2>{series}</h2>
        <AllSets sets={sets} />
      </section>
    ))}

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
  </main>
);
