import { CardGrid } from "@/components/CardGrid";

import { NationalPokedexNumbers } from "./NationalPokedexNumbers";
import { useCleanHashOnScroll } from "./useCleanHashOnScroll";
import { useScrollToCard } from "./useScrollToCard";

const getExtraProps = ({ number, nationalPokedexNumbers }) => {
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
    <section>
      <CardGrid cards={cards} getExtraProps={getExtraProps} />
    </section>
  );
};
