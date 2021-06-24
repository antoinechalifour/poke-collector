import config from "../../knexfile";
import Knex from "knex";

export const connect = () => Knex(config);
