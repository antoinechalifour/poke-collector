import { SetLogo } from "./SetLogo";
import { SetTitle } from "./SetTitle";
import { SetSummary } from "./SetSummary";
import { SetProgress } from "./SetProgress";
import { PokemonPageTitle } from "@/components/PokemonPage/PokemonPageTitle";
import { intersperse } from "@/array";

export const SetDetails = ({
  id,
  images,
  name,
  printedTotal,
  releaseDate,
  series,
  total,
}) => {
  return (
    <>
      <header className="grid grid-default">
        <PokemonPageTitle image={images.logo}>{name}</PokemonPageTitle>

        <ul className="place-center">
          {intersperse(
            [
              series,
              releaseDate,
              `${printedTotal} cards`,
              `${total - printedTotal} secret cards`,
            ],
            "•"
          ).map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>

        <style jsx>{`
          ul {
            position: relative;
            top: -4rem;
            font-size: 1.4rem;
            text-transform: uppercase;
          }

          li + li {
            margin-left: 1.4rem;
          }
        `}</style>
      </header>

      <SetProgress setId={id} />
    </>
  );

  return (
    <section className="grid grid-center-x">
      <SetLogo logoUrl={images.logo} />

      <div className="grid">
        <SetTitle name={name} symbolUrl={images.symbol} />
        <SetSummary
          series={series}
          releaseDate={releaseDate}
          total={total}
          printedTotal={printedTotal}
        />
        <SetProgress setId={id} />
      </div>

      <style jsx>{`
        section {
          grid-template-columns: 1fr 3fr;
          padding: 4rem 0;
          min-height: 25rem;
        }

        div {
          grid-template-columns: minmax(12rem, auto) 1fr;
          grid-template-rows: auto 1fr;
          align-items: center;
          grid-gap: 2rem 6rem;
        }

        div > :global(:first-child) {
          grid-column: 1 / span 2;
        }
      `}</style>
    </section>
  );
};
