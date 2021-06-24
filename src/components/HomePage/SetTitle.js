import Image from "next/image";

export const SetTitle = ({ symbolUrl, name }) => (
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
