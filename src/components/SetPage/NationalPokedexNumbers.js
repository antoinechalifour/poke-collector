import { intersperse } from "@/array";
import { SecondaryLink } from "@/components/SecondaryLink";

export const NationalPokedexNumbers = ({
  cardNumber,
  nationalPokedexNumbers,
}) => (
  <div>
    {intersperse(
      nationalPokedexNumbers.map((nationalNumber) => (
        <SecondaryLink
          id={`link-${cardNumber}-${nationalNumber}`}
          key={nationalNumber}
          label="See all cards of this Pokémon"
          href={`/pokemon/${nationalNumber}`}
        >
          {nationalNumber}
        </SecondaryLink>
      )),
      <span>•</span>
    )}

    <style jsx>{`
      div {
        display: flex;
        align-items: center;
      }

      span {
        margin: 0 0.5ch;
      }
    `}</style>
  </div>
);
