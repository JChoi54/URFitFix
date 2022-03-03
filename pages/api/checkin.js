// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { QueryTypes } = require("sequelize");
const db = require("../../db/db");

const Gym = require("../../db/models/Gym");

export default function handler(req, res) {
  db.sequelize
    .sync({ alter: true })
    .then((_) => {
      // POST Request
      if (req.method === "POST") {
        Gym.create({
          name: req.body.name,
        })
          .then((r) => {
            res.status(201).json({
              id: r.id,
              name: r.name,
            });
          })
          .catch((e) => {
            res.status(500);
          });
      }
      // GET Request
      else {
        Gym.findAll().then((r) => {
          res.status(200).json({
            users: r,
          });
        });
        /*.error((e) => {
      res.status(500);
    });*/
      }
    })
    .catch((e) => {
      res.status(500);
    });
}
