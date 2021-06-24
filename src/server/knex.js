import Knex from "knex";
import config from "../../knexfile";

export const connect = () => Knex(config);
