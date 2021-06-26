import Image from "next/image";

export const SetLogo = ({ logoUrl }) => (
  <div className="aspect-ratio positioning-parent">
    <Image src={logoUrl} objectFit="contain" layout="fill" alt="Series logo" />

    <style jsx>{`
      div {
        --aspect-ratio-width: 4;
        --aspect-ratio-height: 3;

        width: 40%;
      }
    `}</style>
  </div>
);
