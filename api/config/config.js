require("dotenv").config();

module.exports = {
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "admin",
  database: process.env.DB_DATABASE || "db_test",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "postgres",

  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",
};
