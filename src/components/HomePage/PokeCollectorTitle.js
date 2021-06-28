import Image from "next/image";

export const PokeCollectorTitle = () => (
  <div className="block-centered positioning-parent">
    <Image src="/poke-collector-logo.png" width={200} height={200} />
    <h1 className="block-centered typography-display positioning-parent has-after positioning-after-center-x">
      Poké Collector
    </h1>

    <style jsx>{`
      div {
        text-align: center;
        margin: 4rem auto 2rem;
      }

      div :global(img) {
        opacity: 0.4;
        filter: drop-shadow(0 1px 6px rgb(0 0 0 / 100%));
      }

      h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-shadow: 0 1px 2px rgb(0 0 0 / 100%), 0 1px 6px rgb(0 0 0 / 100%);
        font-size: 6rem;
      }
    `}</style>
  </div>
);
