import Image from "next/image";

export const CardImage = ({ url, alt }) => (
  <div>
    <Image layout="fill" src={url} alt={alt} />
    <style jsx>{`
      div {
        position: relative;
        aspect-ratio: 245/342;
      }
    `}</style>
  </div>
);
