import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import { PokemonItem } from "@/components/HomePage/Search/PokemonItem";
import { CardItem } from "@/components/HomePage/Search/CardItem";
import { createElement, Fragment } from "react";
import ReactDOM from "react-dom";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import algoliasearch from "algoliasearch/lite";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_KEY
);

const getSources = ({ query }) => [
  {
    sourceId: "pokemons",
    getItemUrl: ({ item }) => `/pokemon/${item.id}`,
    getItems: () =>
      getAlgoliaResults({
        searchClient,
        queries: [
          {
            indexName: "dev_pokemons",
            query,
            params: {
              hitsPerPage: 10,
            },
          },
        ],
      }),
    templates: {
      item({ item, components }) {
        return <PokemonItem hit={item} components={components} />;
      },
    },
  },
  {
    sourceId: "cards",
    getItemUrl: ({ item }) => `/sets/${item.setId}#${item.id}`,
    getItems: () =>
      getAlgoliaResults({
        searchClient,
        queries: [
          {
            indexName: "dev_cards",
            query,
            params: {
              hitsPerPage: 20,
            },
          },
        ],
      }),
    templates: {
      item({ item, components }) {
        return <CardItem hit={item} components={components} />;
      },
    },
  },
];

export const makeSearch = (container, router) =>
  autocomplete({
    container,
    renderer: { createElement, Fragment },
    placeholder: "Ex: Mewtwo 51/108",
    getSources,
    navigator: {
      navigate({ itemUrl }) {
        router.push(itemUrl);
      },
    },
    render: ({ children }, root) => {
      ReactDOM.render(
        <RouterContext.Provider value={router}>
          <>{children}</>
        </RouterContext.Provider>,
        root
      );
    },
  });
