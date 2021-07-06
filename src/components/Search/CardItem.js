import Link from "next/link";
import Image from "next/image";

export const CardItem = ({ hit, components }) => (
  <>
    <Link href={`/sets/${hit.setId}#${hit.id}`}>
      <a>
        <div className="grid">
          <span className="positioning-parent aspect-ratio">
            <Image layout="fill" src={hit.image} />
          </span>

          <p>
            <components.Highlight hit={hit} attribute="fullName" />
          </p>

          <p>
            <components.Highlight hit={hit} attribute="setName" /> •{" "}
            <components.Highlight hit={hit} attribute="setSeries" /> •{" "}
            <components.Highlight hit={hit} attribute="rarity" />
          </p>
        </div>
      </a>
    </Link>
    <style jsx>{`
      div {
        grid-template-columns: 40px 1fr;
        grid-gap: 1rem 2rem;
        grid-template-rows: auto auto;
        align-items: center;
      }

      span {
        --aspect-ratio-width: 245;
        --aspect-ratio-height: 342;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      div > :global(:first-child) {
        grid-row: 1 / span 2;
      }

      p:nth-child(2) {
        font-weight: 600;
      }

      p:nth-child(3) {
        grid-column: 2;
        opacity: 0.85;
        font-size: 1.4rem;
      }
    `}</style>
  </>
);
