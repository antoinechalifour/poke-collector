import { AllSets } from "./AllSets";

export const HomePage = ({ sets }) => (
  <main>
    <h1>Poke Collector</h1>

    <AllSets sets={sets} />

    <style jsx>{`
      h1 {
        position: relative;
        text-align: center;
        margin: 4rem auto;
        padding-bottom: 4rem;
        font-size: 4rem;
      }

      h1:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;

        display: block;
        width: 25%;
        height: 0.3rem;
        border-radius: 1rem;

        background: #444;

        transform: translateX(-50%);
      }
    `}</style>
  </main>
);
