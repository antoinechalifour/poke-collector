import Image from "next/image";

export const SetTitle = ({ symbolUrl, name }) => (
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
        margin-left: 2rem;

        font-weight: 600;
        font-size: 3.2rem;
        text-transform: uppercase;
      }
    `}</style>
  </header>
);
