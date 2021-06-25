import Link from "next/link";

import { SetLogo } from "./SetLogo";
import { SetSummary } from "./SetSummary";
import { SetTitle } from "./SetTitle";
import { CollectionProgress } from "./CollectionProgress";

export const SetItem = ({ id, name, images, series, releaseDate, total }) => (
  <section>
    <header>
      <CollectionProgress setId={id} />
      <SetLogo alt={name} url={images.logo} />
    </header>

    <div>
      <SetTitle symbolUrl={images.symbol} name={name} />
      <SetSummary series={series} releaseDate={releaseDate} total={total} />
      <Link href={`/sets/${id}`}>
        <a>See cards</a>
      </Link>
    </div>

    <style jsx>{`
      section {
        border-radius: 1rem;
        background: #08081b;
        overflow: hidden;
      }

      header {
        position: relative;
        padding: 1rem 1rem 0;
      }

      div {
        display: grid;
        grid-gap: 1rem;
        padding: 2rem;
      }

      a {
        justify-self: end;
      }
    `}</style>
  </section>
);
