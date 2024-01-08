const express = require("express");
const { sequelize, connectDB } = require("./models/db.js");
const { Line, syncDB } = require("./models/model.js");
const { check_json_req, json_validation } = require("./validators.js");

const app = express();
const port = 3001;

app.use(express.json());

app.listen(port, async () => {
  await connectDB();
  await syncDB();
  console.log(`App running on port ${port}.`);
});

/*
  Query the database
*/
app.get("/lines", async (req, res) => {
  if (!check_json_req(req, res) || !json_validation(req.body, res)) {
    return false;
  }

  try {
    data = req.body ? await Line.findAll(req.body) : await Line.findAll();

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
