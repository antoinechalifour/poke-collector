import { SecondaryLink } from "@/components/SecondaryLink";
import { CardAnimationManager } from "@/components/Card/CardAnimationManager";
import { PageTitle } from "@/components/PageTitle";
import { CardGrid } from "@/components/CardGrid";

const getExtraProps = ({ number, set }) => ({
  extraSummary: [
    {
      label: "Set",
      value: (
        <SecondaryLink
          id={`link-${number}-${set.id}`}
          label={`See all cards of set ${set.name}`}
          href={`/sets/${set.id}`}
        >
          {set.name}
        </SecondaryLink>
      ),
    },
    {
      label: "Release Date",
      value: set.releaseDate,
    },
  ],
});

export const PokemonPage = ({ pokemon, cards }) => (
  <CardAnimationManager>
    <main className="page-container grid grid-default">
      <PageTitle>{pokemon.name}</PageTitle>

      <CardGrid cards={cards} getExtraProps={getExtraProps} />
    </main>
  </CardAnimationManager>
);
