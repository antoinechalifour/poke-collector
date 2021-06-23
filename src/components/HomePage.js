import Link from "next/link";
import Image from "next/image";

const SetDetails = ({ series, releaseDate, total }) => (
  <dl>
    <dt>Series</dt>
    <dd>{series}</dd>

    <dt>Release date</dt>
    <dd>{releaseDate}</dd>

    <dt>Number of cards</dt>
    <dd>{total}</dd>

    <style jsx>{`
      dl {
        display: grid;
        grid-gap: 1rem;
      }

      dt {
        font-weight: bold;
        font-size: 1.2rem;
      }
    `}</style>
  </dl>
);

const SetLogo = ({ url, alt }) => (
  <div>
    <Image layout="fill" src={url} alt={alt} objectFit="contain" />

    <style jsx>{`
      div {
        position: relative;
        aspect-ratio: 4/3;
      }
    `}</style>
  </div>
);

const SetItem = ({ id, name, images, series, releaseDate, total }) => (
  <section>
    <header>
      <SetLogo alt={name} url={images.logo} />
    </header>

    <div>
      <h2>{name}</h2>
      <SetDetails series={series} releaseDate={releaseDate} total={total} />
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

export const HomePage = ({ sets }) => (
  <main>
    <h1>PokeCollector</h1>

    <ol>
      {sets.map((set) => (
        <li key={set.id}>
          <SetItem {...set} />
        </li>
      ))}
    </ol>

    <style jsx>{`
      h1 {
        text-align: center;
        margin: 4rem auto;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 4rem;
      }

      ol {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 2rem;
        max-width: 960px;
        margin: auto;
      }
    `}</style>
  </main>
);
