import axios from "axios";

export const http = axios.create({
  baseURL: "https://api.pokemontcg.io/v2",
  headers: { "X-Api-Key": process.env.API_KEY },
});
