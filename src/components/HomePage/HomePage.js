import { QuickSearch } from "./Search/QuickSearch";
import { Series } from "./Browse/Series";
import { PokeCollectorTitle } from "./PokeCollectorTitle";

export const HomePage = ({ setsBySeries }) => (
  <main className="grid grid-default page-container">
    <PokeCollectorTitle />

    <QuickSearch />

    <h2>Browse sets</h2>

    <div className="grid grid-l">
      {setsBySeries.map(({ series, sets }) => (
        <Series series={series} sets={sets} key={series} />
      ))}
    </div>

    <style jsx>{`
      h2 {
        font-size: 4rem;
        font-weight: 600;
        text-transform: uppercase;
        border-bottom: 2px solid var(--color-accent);
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        margin-top: 3rem;
      }
    `}</style>
  </main>
);
