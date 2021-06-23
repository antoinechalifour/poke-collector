import Image from "next/image";

const SetLogo = ({ logoUrl }) => (
  <div>
    <Image src={logoUrl} objectFit="contain" layout="fill" alt="Series logo" />

    <style jsx>{`
      div {
        position: relative;
        aspect-ratio: 4/3;
        margin: auto;
        width: 80%;
      }
    `}</style>
  </div>
);
const SetTitle = ({ symbolUrl, name }) => (
  <header>
    <Image width={24} height={24} src={symbolUrl} alt="Set symbol" />

    <h1>{name}</h1>

    <style jsx>{`
      header {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
      }

      img {
        max-width: 2.4rem;
      }

      h1 {
        font-weight: 600;
        font-size: 3.2rem;
        margin-left: 2rem;
        text-transform: uppercase;
      }
    `}</style>
  </header>
);

const SetInformation = ({ series, releaseDate, printedTotal, total }) => (
  <dl>
    <dt>Series</dt>
    <dd>{series}</dd>

    <dt>Release date</dt>
    <dd>{releaseDate}</dd>

    <dt># of cards</dt>
    <dd>{printedTotal}</dd>

    <dt># of Secret</dt>
    <dd>{total - printedTotal}</dd>

    <style jsx>{`
      dl {
        display: inline-grid;
        grid-template-columns: auto 1fr;
        grid-gap: 1rem;
      }

      dt {
        text-align: right;
        font-weight: 600;
      }
    `}</style>
  </dl>
);

export const SetDetails = ({
  images,
  name,
  printedTotal,
  releaseDate,
  series,
  total,
}) => (
  <div>
    <section>
      <div>
        <SetLogo logoUrl={images.logo} />
        <SetTitle name={name} symbolUrl={images.symbol} />
        <SetInformation
          series={series}
          releaseDate={releaseDate}
          total={total}
          printedTotal={printedTotal}
        />
      </div>
    </section>

    <style jsx>{`
      section {
        position: sticky;
        top: 0;
        min-height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      div {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
  </div>
);
