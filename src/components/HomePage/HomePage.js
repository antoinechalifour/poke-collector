import { PokeCollectorTitle } from "./PokeCollectorTitle";
import { Series } from "./Series";

export const HomePage = ({ setsBySeries }) => (
  <main>
    <PokeCollectorTitle />

    {setsBySeries.map(({ series, sets }) => (
      <Series series={series} sets={sets} key={series} />
    ))}
  </main>
);
