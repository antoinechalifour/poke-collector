export const PokemonsHTTPAdapter = (pokeApi) => {
  const ofNationalNumber = (nationalNumber) =>
    pokeApi.get(`/pokemon-species/${nationalNumber}`).then((res) => ({
      id: nationalNumber,
      image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${nationalNumber
        .toString()
        .padStart(3, "0")}.png`,
      name: res.data.names.find((name) => name.language.name === "en").name,
    }));

  const all = async () => {
    const pokemons = [];

    for (let i = 1; i <= 898; i += 1) {
      pokemons.push(await ofNationalNumber(i));
    }

    return pokemons;
  };

  return {
    all,
    ofNationalNumber,
  };
};
