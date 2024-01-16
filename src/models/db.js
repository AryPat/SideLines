import { Sequelize } from "sequelize";
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.LOCAL_DATABASE_NAME || process.env.PROD_DATABASE_NAME,
  process.env.LOCAL_USER || process.env.PROD_USER,
  process.env.LOCAL_PASSWORD || process.env.PROD_PASSWORD,
  {
    host: process.env.LOCAL_HOST || process.env.PROD_HOST,
    port: process.env.LOCAL_DATABASE_PORT || process.env.PROD_DATABASE_PORT,
    dialect: "mysql",
    dialectModule: require("mysql2"),
    define: {
      timestamps: false,
    },
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

export { sequelize, connectDB };
