import Image from "next/image";

export const SetTitle = ({ symbolUrl, name }) => (
  <header className="card-content place-center">
    <Image width={24} height={24} src={symbolUrl} alt="Set symbol" />

    <h1 className="typography-heading1">{name}</h1>

    <style jsx>{`
      h1 {
        margin-left: 2rem;
      }
    `}</style>
  </header>
);
