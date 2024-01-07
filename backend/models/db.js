const { Sequelize } = require("sequelize");

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

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database successfully connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { sequelize, connectDB };
