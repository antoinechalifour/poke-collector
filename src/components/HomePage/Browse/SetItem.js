import Link from "next/link";

import { SetLogo } from "./SetLogo";
import { SetSummary } from "./SetSummary";
import { SetTitle } from "./SetTitle";
import { CollectionProgress } from "./CollectionProgress";

export const SetItem = ({ id, name, images, series, releaseDate, total }) => (
  <section className="card">
    <header className="positioning-parent">
      <CollectionProgress setId={id} />
      <SetLogo alt={name} url={images.logo} />
    </header>

    <div className="grid grid-default card-content">
      <SetTitle symbolUrl={images.symbol} name={name} />
      <SetSummary series={series} releaseDate={releaseDate} total={total} />
      <Link href={`/sets/${id}`}>
        <a className="button button-fluid">See cards</a>
      </Link>
    </div>

    <style jsx>{`
      header {
        padding: 1rem 1rem 0;
      }
    `}</style>
  </section>
);
