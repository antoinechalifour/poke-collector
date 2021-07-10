import Image from "next/image";

export const SetTitle = ({ symbolUrl, name }) => (
  <header className="grid grid-default grid-center-x">
    <Image width={24} height={24} src={symbolUrl} alt="Set symbol" />

    <h1 className="typography-heading1">{name}</h1>

    <style jsx>{`
      header {
        grid-template-columns: auto 1fr;
      }
    `}</style>
  </header>
);
