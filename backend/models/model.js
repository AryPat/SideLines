const { sequelize } = require("./db");
const { Model, DataTypes } = require("sequelize");

const Line = sequelize.define("data", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  video_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  speaker: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  speakee: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pickup_line: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  video_link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start_time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  end_time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  result: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const syncDB = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Models have been successfully synced");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { Line, syncDB };
