import { Sequelize, DataTypes, Dialect } from "sequelize";
import { DB_DATABASENAME, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD } from "src/env";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";

export const sequelize = new Sequelize(
  DB_DATABASENAME || "",
  DB_USERNAME || "",
  DB_PASSWORD || "",
  {
    host: DB_HOST || "",
    dialect: "postgres",
    dialectOptions: { decimalNumbers: true },
    logging: console.log,
    // pool: {
    //   max: dbConfig.pool.max,
    //   min: dbConfig.pool.min,
    //   acquire: dbConfig.pool.acquire,
    //   idle: dbConfig.pool.idle,
    // },
  }
);
export const getDatabase = async () => {
  const db: any = {};
  const excludedFiles = [".", "..", "index.ts"];
  let files = await fs.readdir("./src/models");

  for (let fileName of files) {
    if (!excludedFiles.includes(fileName) && path.extname(fileName) === ".ts") {
      const model = await import("./" + fileName);
      if (model.default) {
        db[model.default.name] = model.default;
      }
    }
  }

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  return db;
};

export const syncDatabase = async () => {
  let db = await getDatabase();
  await db.sequelize
    .sync({ force: false, alter: false })
    .then(() => {
      console.log("yes re-sync done!");
    })
    .catch((e: Error) => {
      console.log("------------", e);
    });
  return true;
};
