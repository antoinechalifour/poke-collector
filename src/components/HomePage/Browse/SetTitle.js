import Image from "next/image";

export const SetTitle = ({ symbolUrl, name }) => (
  <div className="grid grid-default grid-center-x">
    <Image width={20} height={20} src={symbolUrl} alt={`${name} icon`} />

    <h2 className="typography-heading2" title={name}>
      {name}
    </h2>

    <style jsx>{`
      div {
        grid-template-columns: auto 1fr;
      }

      h2 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}</style>
  </div>
);
