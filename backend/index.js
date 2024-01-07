const { Sequelize } = require("sequelize");
const express = require("express");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  "mysql",
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.DATABASE_PORT,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database successfully connected.");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
