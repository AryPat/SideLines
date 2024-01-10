const express = require("express");
const { sequelize, connectDB } = require("./models/db.js");
const { Line, syncDB } = require("./models/model.js");
const { check_json_req, json_validation } = require("./validators.js");

const app = express();
const port = 3001;

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Replace '*' with the specific origin you want to allow
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(port, async () => {
  await connectDB();
  await syncDB();
  console.log(`App running on port ${port}.`);
});

/*
  Query the database
*/
app.post("/lines", async (req, res) => {
  if (!check_json_req(req, res) || !json_validation(req.body.data, res)) {
    return false;
  }

  try {
    data = req.body.data
      ? await Line.findAll(req.body.data)
      : await Line.findAll();

    res.status(200).json({
      count: data.length,
      result: data,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});
