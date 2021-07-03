import Image from "next/image";

export const CardImage = ({ url, alt }) => (
  <div className="aspect-ratio positioning-parent">
    <Image layout="fill" src={url} alt={alt} />

    <style jsx>{`
      div {
        --aspect-ratio-width: 245;
        --aspect-ratio-height: 342;

        border-radius: 1rem;
        overflow: hidden;
      }
    `}</style>
  </div>
);
