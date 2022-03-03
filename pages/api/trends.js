// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { QueryTypes } = require("sequelize");
const db = require("../../db/db");

const Gym = require("../../db/models/Gym");

export default function handler(req, res) {
  db.sequelize
    .sync({ alter: true })
    .then((_) => {
      Gym.count().then((r) => {
        res.status(200).json({
          occupancy: r,
        });
      });
    })
    .catch((e) => {
      res.status(500);
    });
}
