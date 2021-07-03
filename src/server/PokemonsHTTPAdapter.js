export const PokemonsHTTPAdapter = (pokeApi) => ({
  ofNationalNumber: (nationalNumber) =>
    pokeApi.get(`/pokemon-species/${nationalNumber}`).then((res) => ({
      name: res.data.names.find((name) => name.language.name === "en").name,
    })),
});
