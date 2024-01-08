const express = require("express");
const { sequelize, connectDB } = require("./models/db.js");
const { Line, syncDB } = require("./models/model.js");

const app = express();
const port = 3001;

app.listen(port, async () => {
  await connectDB();
  await syncDB();
  console.log(`App running on port ${port}.`);
});
