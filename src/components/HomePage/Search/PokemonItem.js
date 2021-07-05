import Link from "next/link";
import Image from "next/image";

export const PokemonItem = ({ hit, components }) => (
  <>
    <Link href={`/pokemon/${hit.id}`}>
      <a>
        <div className="grid">
          <span className="positioning-parent aspect-ratio">
            <Image layout="fill" src={hit.image} />
          </span>

          <p>
            <span>
              <components.Highlight hit={hit} attribute="name" />
            </span>{" "}
            in Pokémon
          </p>
        </div>
      </a>
    </Link>
    <style jsx>{`
      div {
        grid-template-columns: 40px 1fr;
        grid-gap: 1rem 2rem;
        align-items: center;
      }

      span.aspect-ratio {
        --aspect-ratio-width: 1;
        --aspect-ratio-height: 1;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      p span {
        font-weight: 600;
      }
    `}</style>
  </>
);
