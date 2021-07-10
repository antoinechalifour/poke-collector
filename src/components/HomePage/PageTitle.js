import Image from "next/image";

export const PageTitle = ({ children }) => (
  <div className="grid grid-default block-centered">
    <span className="positioning-parent">
      <Image src="/poke-collector-logo.png" width={200} height={200} alt="" />
    </span>

    <h1 className="block-centered typography-display ">{children}</h1>

    <style jsx>{`
      div {
        text-align: center;
        margin: 4rem auto 2rem;
      }

      div :global(img) {
        filter: drop-shadow(0 1px 6px rgb(0 0 0 / 100%));
      }

      h1 {
        text-shadow: 0 1px 2px rgb(0 0 0 / 100%), 0 1px 6px rgb(0 0 0 / 100%);
        font-size: 5rem;
        white-space: nowrap;
      }
    `}</style>
  </div>
);
