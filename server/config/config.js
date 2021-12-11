require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_NAME,
    host: "localhost",
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_NAME,
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_NAME,
    host: "localhost",
    dialect: "mysql",
  },
};
