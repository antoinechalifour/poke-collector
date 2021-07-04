import Image from "next/image";

export const SetLogo = ({ url, alt }) => (
  <div className="aspect-ratio positioning-parent">
    <Image layout="fill" src={url} alt={alt} objectFit="contain" />

    <style jsx>{`
      div {
        --aspect-ratio-width: 4;
        --aspect-ratio-height: 3;
      }
    `}</style>
  </div>
);
