// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { QueryTypes } = require("sequelize");
const db = require("../../db/db");

const Gym = require("../../db/models/Gym");

export default function handler(req, res) {
  db.sequelize.sync({ alter: true }).then((_) => {
    // POST Request
    if (req.method === "POST") {
      Gym.destroy({
        where: {
          id: req.body.id,
        },
      })
        .then((r) => {
          res.status(200).json({});
        })
        .catch((e) => {
          res.status(500);
        });
    } else {
      res.status(400);
    }
  });
}
