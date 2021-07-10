import { CardGrid } from "@/components/CardGrid";

import { NationalPokedexNumbers } from "./NationalPokedexNumbers";
import { useCleanHashOnScroll } from "./useCleanHashOnScroll";
import { useScrollToCard } from "./useScrollToCard";

const getExtraProps = ({ number, nationalPokedexNumbers = [] }) => {
  if (!nationalPokedexNumbers.length) return {};

  const extraSummary = [
    {
      label: "National n°",
      value: (
        <NationalPokedexNumbers
          cardNumber={number}
          nationalPokedexNumbers={nationalPokedexNumbers}
        />
      ),
    },
  ];

  return {
    extraSummary,
  };
};

export const AllCards = ({ cards }) => {
  useCleanHashOnScroll();
  useScrollToCard(cards);

  return (
    <section className="grid grid-default">
      <CardGrid cards={cards} getExtraProps={getExtraProps} />

      <style jsx>{`
        section {
          grid-template-rows: auto 1fr;
          padding: 2rem;
        }
      `}</style>
    </section>
  );
};
