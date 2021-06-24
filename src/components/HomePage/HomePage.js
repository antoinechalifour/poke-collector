import { AllSets } from "./AllSets";

export const HomePage = ({ sets }) => (
  <main>
    <h1>PokeCollector</h1>

    <AllSets sets={sets} />

    <style jsx>{`
      h1 {
        text-align: center;
        margin: 4rem auto;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 4rem;
      }
    `}</style>
  </main>
);
