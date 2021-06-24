import Image from "next/image";

export const SetLogo = ({ logoUrl }) => (
  <div>
    <Image src={logoUrl} objectFit="contain" layout="fill" alt="Series logo" />

    <style jsx>{`
      div {
        position: relative;
        margin: auto;
        width: 40%;
        aspect-ratio: 4/3;
      }
    `}</style>
  </div>
);
