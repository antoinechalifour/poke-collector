import axios from "axios";

export const pokemonTcg = axios.create({
  baseURL: "https://api.pokemontcg.io/v2",
  headers: { "X-Api-Key": process.env.API_KEY },
});

export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
