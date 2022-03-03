const { Sequelize } = require("sequelize");

// TODO: In production, change to connect to a actual database.
const sequelize = new Sequelize("sqlite::memory:");

module.exports = { sequelize };
