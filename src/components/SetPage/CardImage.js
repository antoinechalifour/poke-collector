import Image from "next/image";

const test = `
  @supports not (aspect-ratio: auto) {
    div {
      padding-bottom: 139%;
    }
  }
`;

export const CardImage = ({ url, alt }) => (
  <div className="aspect-ratio positioning-parent">
    <Image layout="fill" src={url} alt={alt} />

    <style jsx>{`
      div {
        --aspect-ratio-width: 245;
        --aspect-ratio-height: 342;
      }
    `}</style>
  </div>
);
