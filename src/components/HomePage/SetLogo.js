import Image from "next/image";

export const SetLogo = ({ url, alt }) => (
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
