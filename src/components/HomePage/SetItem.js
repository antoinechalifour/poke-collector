import Link from "next/link";
import Image from "next/image";

import { SetLogo } from "./SetLogo";
import { SetSummary } from "./SetSummary";

const SetTitle = ({ symbolUrl, name }) => (
  <div>
    <Image width={20} height={20} src={symbolUrl} alt={`${name} icon`} />

    <h2>{name}</h2>

    <style jsx>{`
      div {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 1rem;
        align-items: center;
      }

      h2 {
        font-weight: 600;
        text-transform: uppercase;
      }
    `}</style>
  </div>
);

export const SetItem = ({ id, name, images, series, releaseDate, total }) => (
  <section>
    <header>
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

      a {
        justify-self: end;
      }
    `}</style>
  </section>
);
