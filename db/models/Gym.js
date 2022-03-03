const db = require("../db");
const Sequelize = require("sequelize");

let Gym = db.sequelize.define("gym", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = Gym;
