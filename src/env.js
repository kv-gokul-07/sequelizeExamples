import * as dotenv from "dotenv";
dotenv.config();

export const NODE_ENV = process.env.NODE_ENV;

export const PORT = process.env.PORT;

export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_DATABASENAME = process.env.DB_DATABASENAME;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
