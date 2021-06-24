import config from "../../knexfile";
import Knex from "knex";

export const knex = Knex(config);
