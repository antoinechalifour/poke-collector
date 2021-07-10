import Image from "next/image";

export const PokemonPageTitle = ({ image, children }) => (
  <div className="block-centered positioning-parent">
    <Image
      src={image}
      width={250}
      height={250}
      objectFit="contain"
      alt="Official artwork"
    />
    <h1 className="block-centered">{children}</h1>

    <style jsx>{`
      div {
        text-align: center;
        margin: 4rem auto;
      }

      div > :global(div) {
        border-radius: 50%;
        border: 5px solid rgb(0 0 0 / 85%);

        opacity: 0.85;
        box-shadow: 0 1px 6px rgb(0 0 0 / 33%);
        background: var(--color-background-darker);
      }

      h1 {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 100%;

        border: 5px solid rgb(0 0 0 / 85%);
        border-radius: 1rem;

        box-shadow: 0 1px 6px rgb(0 0 0 / 33%);
        background: var(--color-background-darker);

        transform: translateX(-50%);
        text-shadow: 0 1px 2px rgb(0 0 0 / 100%), 0 1px 6px rgb(0 0 0 / 100%);
        font-size: 4rem;
        white-space: nowrap;
      }
    `}</style>
  </div>
);
