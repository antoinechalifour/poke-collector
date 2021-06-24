import Link from "next/link";

import { SetLogo } from "./SetLogo";
import { SetSummary } from "./SetSummary";

export const SetItem = ({ id, name, images, series, releaseDate, total }) => (
  <section>
    <header>
      <SetLogo alt={name} url={images.logo} />
    </header>

    <div>
      <h2>{name}</h2>
      <SetSummary series={series} releaseDate={releaseDate} total={total} />
      <Link href={`/sets/${id}`}>
        <a>See cards</a>
      </Link>
    </div>

    <style jsx>{`
      section {
        border-radius: 1rem;
        background: #171717;
      }

      header {
        padding: 1rem 1rem 0;
      }

      div {
        display: grid;
        grid-gap: 1rem;
        padding: 2rem;
      }

      h2 {
        font-weight: 600;
        text-transform: uppercase;
      }

      a {
        justify-self: end;
      }
    `}</style>
  </section>
);
